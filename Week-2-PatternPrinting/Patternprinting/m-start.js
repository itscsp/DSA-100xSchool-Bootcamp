const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let result = "";

rl.on("line", (input) => {
  const [rows, cols] = input.split(" ").map(Number);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result += "*";
    }
    result += "\n";
  }

  console.log(result.trimEnd()); // removes last newline safely
  rl.close();
});
