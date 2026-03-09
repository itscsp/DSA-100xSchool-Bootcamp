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

  for(let i = 0; i < m; i++){
    result.push(matrix[0][i]);
  }

  for(let i = 1; i < n ; i++){
    result.push(matrix[i][m-1]);
  }

for(let i = m-2; i >= 0 ; i--){
    result.push(matrix[n-1][i]);
  }

 for(let i = n-2; i >= 1 ; i--){
    result.push(matrix[i][0]);
  }

  console.log(result.join(" "));
});