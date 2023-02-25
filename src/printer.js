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
const dedent = docBuilders.dedent;
const dedentToRoot = docBuilders.dedentToRoot;
const doublehardline = concat([hardline, hardline]);
const empty = "";

function getAll(node, types) {
  if (typeof types === "string") {
    return node[types] ? [types] : [];
  }
  return types.filter((type) => node[type]);
}

function getAny(node, types) {
  if (typeof types === "string") {
    return node[types] ? types : undefined;
  }
  return types.find((type) => node[type]);
}
////////////////////////////////////////////////////////////////////////
// Util
////////////////////////////////////////////////////////////////////////
const concat_docs = (path, print, keywords, { sep = " " }) => {
  return join(
    sep,
    keywords.map((keyword) => {
      return path.call(print, keyword, 0);
    })
  );
};

const concat_children = (
  path,
  print,
  children,
  { key = "children", sep = " " }
) => {
  return join(
    sep,
    children.map((_, index) => {
      return path.call(print, key, index);
    })
  );
};

////////////////////////////////////////////////////////////////////////
// Format Rule
////////////////////////////////////////////////////////////////////////
// cf. access(all) contract HelloWorld {...}
const contract_declaration = (path, print) => {
  const modifier = path.call(print, "access_level_modifier", 0);
  const contract = path.call(print, "terminal", 0); // contract
  const contract_name = path.call(print, "identifier", 0);
  const code_block = path.call(print, "code_block", 0);

  return [
    join(" ", [modifier, contract, contract_name]),
    // group(join(" ", [modifier, contract, contract_name])),
    " ",
    code_block
  ];
};

// cf. access(all) let greeting: String
const constant_declaration = (path, print) => {
  return [
    // group(
      concat_docs(
        path,
        print,
        [
          "declaration_modifiers",
          "terminal", // let or var
          "pattern_initializer_list"
        ],
        {}
      ),
    // ),
    softline
  ];
};

// cf. init() {...}
const initializer_declaration = (path, print) => {
  return group(
    join(" ", [
      concat_docs(path, print, ["initializer_head", "parameter_clause"], {
        sep: ""
      }),
      concat_docs(path, print, ["initializer_body"], {})
      // docBuilders.indentIfBreak(concat_docs(path, print, ["initializer_body"]), {groupId: "{}"})
    ])
  );
};

// cf. {...}
const code_block = (path, print) => {
  return [
    indent(join(hardline, ["{", path.call(print, "statements", 0)])),
    hardline,
    dedent("}")
  ];
};

// cf. access(all) fun hello(): String {...}
const function_declaration = (path, print, hasBody=true) => {
  docs = [
    path.call(print, "function_head", 0),
    " ",
    path.call(print, "function_name", 0),
    path.call(print, "function_signature", 0),
  ]
  if (hasBody) {
    docs.push(" ")
    docs.push(path.call(print, "function_body", 0))
  }
  docs.push(hardline)
  docs.push(hardline)
  return docs;
};

function printNode(path, options, print) {
  const node = path.getValue();
  // if(node.comments){
  //   console.log(node.comments)
  //   console.log(node)
  //   // return node.comments
  // }
  console.log(node.nodeType);
  // console.log(node)
  switch (node.nodeType) {
    case "contract_declaration":
      return contract_declaration(path, print);
    case "constant_declaration":
      return constant_declaration(path, print);
    case "initializer_declaration":
      return initializer_declaration(path, print);
    case "code_block":
      return code_block(path, print);
    case "statements":
      return concat_children(
        path,
        print,
        node.children,
        (sep = [hardline, hardline])
      );
    case "function_declaration":
      return function_declaration(path, print, 'function_body' in node);
    case "parameter_list":
      return concat_children(path, print, node.parameter, {
        key: "parameter",
        sep: ", "
      });
    case "composite_types":
      return [
        ": ",
        concat_children(path, print, node.type, { key: "type", sep: ", " }),
        " ",
      ];
    case "terminal":
      return node.value;
    // concat with space
    case "function_head":
    case "variable_declaration_head":
    case "event_declaration_head":
    case "parameter_name":
    case "type_annotation":
    case "assignment_statement":
    case "return_statement":
    case "check_statement_conditions":
    case "check_statement_message":
    case "resource_implementation_declaration":
    case "resource_interface_declaration":
      return concat_children(path, print, node.children, { sep: " " });
    // concat with space and hardline
    case "variable_declaration":
    case "event_declaration":
      return [
        concat_children(path, print, node.children, { sep: " " }),
        hardline
      ];
    // concat with ""
    case "pattern":
    default:
      // console.log(node);
      return concat_children(path, print, node.children, { sep: "" });
  }
}

function printComment(path, options) {
  const node = path.getValue();
  // console.log(node);

  node.printed = true;

  if (node.value.startsWith("//")) {
    return node.value.trimRight();
    // return [hardline, node.value.trimRight()];
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
    ["//"].some((d) => comment.value.startsWith(d))
  ) {
    // console.log(comment)
    util.addLeadingComment(comment.followingNode, comment);
    return true;
  } else if (
    comment.precedingNode &&
    ["#endregion", "#elif", "#else", "#endif"].some((d) =>
      comment.value.startsWith(d)
    )
  ) {
    // util.addTrailingComment(comment.precedingNode, comment);
    return true;
  }

  return false;
}

function handleEndOfLineComments(
  comment /*, text, options, ast, isLastComment*/
) {
  // console.log(comment)
  if (
    comment.precedingNode &&
    ["//"].some((d) => comment.value.startsWith(d))
  ) {
    // util.addDanglingComment(comment.precedingNode, comment);
    util.addLeadingComment(comment.precedingNode, comment);
    // util.addTrailingComment(comment.precedingNode, comment);
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
    ownLine: handleOwnLineComments,
    endOfLine: handleEndOfLineComments
  }
};

// export const print = printNode;
// export const printComment = printComment;
// export const canAttachComment = canAttachComment;
// export const getCommentChildNodes = getCommentChildNodes;
// export const handleComments = {
//   ownLine: handleOwnLineComments
// };
