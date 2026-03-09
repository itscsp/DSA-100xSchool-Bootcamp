const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", (line) => {
  lines.push(line.trim());
});

rl.on("close", () => {

  let [n, m] = lines[0].split(" ").map(Number);

  let matrix = [];

  for (let i = 1; i <= n; i++) {
    matrix.push(lines[i].split(" ").map(Number));
  }

  let result = [];

  for (let j = 0; j < m; j++) {

    if (j % 2 === 0) {

      for (let i = 0; i < n; i++) {
      result.push(matrix[i][j]);
    }
    
  } else {
    
    for (let i = n - 1; i >= 0; i--) {
        result.push(matrix[i][j]);
      }

    }

  }

  console.log(result.join(" "));
});