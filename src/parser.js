"use strict";
// import antlr4 from "antlr4";
// import CadenceLexer from "./antlr/CadenceLexer";
// import CadenceParser from "./antlr/CadenceParser";
// import CadenceParserListener from "./antlr/CadenceParserListener";
// import _ from "lodash";

const antlr4 = require("antlr4");
// const antlr4 = await import("antlr4");
const CadenceLexer = require("./antlr/CadenceLexer").CadenceLexer;
const CadenceParser = require("./antlr/CadenceParser").CadenceParser;
const CadenceParserListener = require("./antlr/CadenceParserListener").CadenceParserListener;
const _ = require("lodash");

const nodeNameRegex = /Context$|NodeImpl$/;

// const cadenceParser = (text) => {
//   const chars = new antlr4.InputStream(text);
//   const lexer = new CadenceLexer(chars);
//   const tokens = new antlr4.CommonTokenStream(lexer);
//   const parser = new CadenceParser(tokens);
//   parser.buildParseTrees = true;
//   const tree = parser.top_level();
//   const printer = new CadenceParserListener();
//   antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
//   // console.log(tree);
//   const result = simplifyTree(tree);
//   result.comments = tokens.tokens
//     .filter(
//       (token) =>
//         token.channel == CadenceLexer.DEFAULT_TOKEN_CHANNEL ||
//         token.channel == CadenceLexer.HIDDEN
//     )
//     .map((token) => buildComment(token));
//   // console.log(result);
//   return result;
// };
const cadenceParser = (text) => {
  const chars = new antlr4.InputStream(text);
  const lexer = new CadenceLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CadenceParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.top_level();
  // const printer = new CadenceParserListener();
  // antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
  // console.log(tree);
  const result = simplifyTree(tree);
  result.comments = tokens.tokens
    .filter(
      (token) =>
        token.channel == 1
    )
    .map((token) => buildComment(token));
  // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  // console.log(result.comments)
  return result;
};

function simplifyTree(node) {
  const nodeType = _.snakeCase(
    node.constructor.name.replace(nodeNameRegex, "")
  );

  if (!node.children) {
    if (node.symbol) {
      return {
        nodeType,
        start: node.symbol.start,
        end: node.symbol.stop,
        lineStart: node.symbol.line,
        lineEnd: node.symbol.line,
        value: node.symbol.text
      };
    }
  }

  const children = {};
  const orderedChildren = [];

  for (let child of node.children) {
    child = simplifyTree(child);
    if (!children[child.nodeType]) {
      children[child.nodeType] = [];
    }
    children[child.nodeType].push(child);
    orderedChildren.push(child);
  }

  return {
    ...children,
    children: orderedChildren,
    nodeType,
    start: node.start.start,
    end: node.stop.stop,
    lineStart: node.start.line,
    lineEnd: node.stop.line
  };
}

function buildComment(token) {
  return {
    nodeType: getNodeTypeFromChannel(token),
    start: token.start,
    end: token.stop,
    lineStart: token.line,
    lineEnd: token.line,
    value: token.text
  };
}

function getNodeTypeFromChannel(token) {
  switch (token.channel) {
    case CadenceLexer.HIDDEN:
      return "comment";
    case CadenceLexer.DEFAULT_TOKEN_CHANNEL:
      return "directive";
  }
  return "unknown";
}

function loc(prop) {
  return function(node) {
    return node[prop];
  };
}

module.exports = {
  parse: cadenceParser,
  astFormat: "cadence",
  locStart: loc("start"),
  locEnd: loc("end")
};

// export const parse = cadenceParser;
// export const astFormat = "cadence";
// export const locStart = loc("start");
// export const locEnd = loc("end");
