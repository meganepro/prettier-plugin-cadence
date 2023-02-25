const parser = require("./parser");
const printer = require("./printer");
// import parser from "./parser.js";
// import printer from "./printer.js";

const languages = [
  {
    name: "Cadence",
    parsers: ["cadence"],
    tmScope: "source.cadence",
    aceMode: "text",
    // codemirrorMode: "clike",
    extensions: [".cdc"],
    vscodeLanguageIds: ["cadence"],
    linguistLanguageId: 270184138
  }
];

const parsers = {
  cadence: parser
};

const printers = {
  cadence: printer
};

const options = {};

const defaultOptions = {
  tabWidth: 4
};

module.exports = {
  languages,
  parsers,
  printers,
  options,
  defaultOptions
};
