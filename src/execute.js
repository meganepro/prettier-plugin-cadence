// const prettier = require('prettier')
const fs = require('fs').promises
const load = async () => {
  const prettier = await import('prettier')
  // const code = "(add 1 2)";
  const code = await fs.readFile("./input.cdc", "utf-8");
  // const input = "your text to parse here"
  console.log(code)
  const formatted = prettier.format(code, {
    parser: "cadence",
    plugins: ["."]
  });
  console.log("-------------------------finished")
  console.log(formatted)
}
load()
