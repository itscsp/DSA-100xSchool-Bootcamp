const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  let index = 0;
  let t = Number(input[index++]);
let result = []
  for(let i =0; i<t; i++){
    result.push(helloFn())
  }

  console.log(result.join("\n"))

});


function helloFn() {
    return "I am learning functions"
}