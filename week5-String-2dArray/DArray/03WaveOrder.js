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

  // first line
  let [n, m] = lines[0].split(" ").map(Number);

  let matrix = [];

  // next n lines
  for (let i = 1; i <= n; i++) {
    matrix.push(lines[i].split(" ").map(Number));
  }

  let result = []

  for(let i = 0; i<n; i++){
    if(i % 2 == 0){

        for(let j = 0; j < m; j++){
          result.push(parseInt(matrix[i][j]))
          }
    } else {
        for(let j = m-1; j >= 0; j--){
          result.push(parseInt(matrix[i][j]))
        }
    }
  }

  console.log(result.join(" "));
});