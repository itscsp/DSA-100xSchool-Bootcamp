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
  let [n, m, e] = lines[0].split(" ").map(Number);

  let matrix = [];

  // next n lines
  for (let i = 1; i <= n; i++) {
    matrix.push(lines[i].split(" ").map(Number));
  }


  for(let i = 0; i<n; i++){
    for(let j = 0; j<m; j++){
      if(matrix[i][j] == e){
          console.log(true);
          return;
      }
    }
  }
  
});