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

  let maxCount = 0;
  let maxIndex = 0;

  for (let i = 0; i < n; i++) {
    let counter = 0;

    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 1) {
        counter++;
      }
    }

    if (counter > maxCount) {
      maxCount = counter;
      maxIndex = i;
    }
  }

if(maxIndex == 0){
  console.log(-1)
} else {
  console.log(maxIndex)
}
});