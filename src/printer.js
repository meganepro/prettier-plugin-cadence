const docBuilders = require("prettier").doc.builders;
// import * as docBuilders from "prettier/doc/builders";
const util = require("prettier").util;
// import { util } from "prettier";
const concat = docBuilders.concat;
const join = docBuilders.join;
const hardline = docBuilders.hardline;
const line = docBuilders.line;
const softline = docBuilders.softline;
const trim = docBuilders.trim;
const group = docBuilders.group;
const conditionalGroup = docBuilders.conditionalGroup;
const indent = docBuilders.indent;
const dedentToRoot = docBuilders.dedentToRoot;
const doublehardline = concat([hardline, hardline]);
const empty = "";

function getAll(node, types) {
  if (typeof types === "string") {
    return node[types] ? [types] : [];
  }
  return types.filter(type => node[type]);
}

function getAny(node, types) {
  if (typeof types === "string") {
    return node[types] ? types : undefined;
  }
  return types.find(type => node[type]);
}

function printNode(path, options, print) {
  const node = path.getValue();
  // console.log("1##########################################")
  // console.log(node)
  // console.log("2##########################################")
  // console.log(node.nodeType)
  // console.log("3##########################################")
  // console.log(node.value)
  switch (node.nodeType) {
    case "compilation_unit":
      return printCompilationUnit(path, options, print);
    case "extern_alias_directives":
      return printExternAliasDirectives(path, options, print);
    case "terminal":
      return node.value
    default:
      // console.log(path, options, print);
      // console.log("4##########################################")
      // console.log(path.call(print, "terminal", 0))
      // return node.value
      // return path.call(print, node.nodeType, 0);
      if ('children' in node){
        const docs = [];
        node.children.forEach((child,index) => {
          docs.push(path.call(print, 'children',index))
        });
        return indent(group(concat(docs)));
      }else{
        'unexpected error.'
      }
    // throw new Error(
    //   `Unknown C# node: ${node.nodeType || node.constructor.name}`
    // );
  }
}

function printComment(path, options) {
  const node = path.getValue();

  node.printed = true;

  if (node.value.startsWith("//")) {
    return node.value.trimRight();
  } else if (node.value.startsWith("#")) {
    const isPreviousLineEmpty = util.isPreviousLineEmpty(
      options.originalText,
      node,
      options
    );
    const isNextLineEmpty = util.isNextLineEmptyAfterIndex(
      options.originalText,
      options.locEnd(node) + 1
    );
    const docs = [];
    if (isPreviousLineEmpty) {
      docs.push(dedentToRoot(hardline));
    }
    docs.push(trim, node.value);
    if (isNextLineEmpty && isLastComment(path)) {
      docs.push(hardline);
    }
    return concat(docs);
  } else {
    return node.value;
  }
}

function isType(node, type) {
  return node && node.nodeType === type;
}

function canAttachComment(node) {
  return (
    node &&
    node.leading === undefined &&
    node.trailing === undefined &&
    node.dangling === undefined
  );
}

function getCommentChildNodes(node) {
  return node.children.filter((child) => !isType(child, "terminal"));
}

function hasPreprocessorDirectives(node) {
  return (
    (node.comments &&
      node.comments.find((child) => isType(child, "directive"))) ||
    (node.children && node.children.find(hasPreprocessorDirectives))
  );
}

function handleOwnLineComments(
  comment /*, text, options, ast, isLastComment*/
) {
  if (
    comment.followingNode &&
    ["#if", "#region"].some((d) => comment.value.startsWith(d))
  ) {
    util.addLeadingComment(comment.followingNode, comment);
    return true;
  } else if (
    comment.precedingNode &&
    ["#endregion", "#elif", "#else", "#endif"].some((d) =>
      comment.value.startsWith(d)
    )
  ) {
    util.addTrailingComment(comment.precedingNode, comment);
    return true;
  }

  return false;
}

function printDanglingComments(path, options) {
  const parts = [];
  const node = path.getValue();

  if (!node || !node.comments) {
    return "";
  }

  path.each((commentPath) => {
    const comment = commentPath.getValue();

    if (comment && !comment.leading && !comment.trailing) {
      parts.push(printComment(commentPath, options));
    }
  }, "comments");

  if (parts.length === 0) {
    return "";
  }

  return indent(concat([hardline, join(hardline, parts)]));
}

module.exports = {
  print: printNode,
  printComment,
  canAttachComment,
  getCommentChildNodes,
  handleComments: {
    ownLine: handleOwnLineComments
  }
};

// export const print = printNode;
// export const printComment = printComment;
// export const canAttachComment = canAttachComment;
// export const getCommentChildNodes = getCommentChildNodes;
// export const handleComments = {
//   ownLine: handleOwnLineComments
// };
