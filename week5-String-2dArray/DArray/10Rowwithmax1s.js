
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
    
    let counter = 0    
    for(let j = 0; j<m; j++){
          if(matrix[i][j] == 1){
            counter++
          }
    }
    result[i] = counter;
  }

  maxEle = result[0]
  for(let i =0; i < result.length; i++){
      if(result[i] > maxEle){
        maxEle = matrix[i]
      }
  }

  console.log(maxEle)
  
});