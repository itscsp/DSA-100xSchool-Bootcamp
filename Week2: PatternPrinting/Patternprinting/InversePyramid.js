const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});


rl.on("line", (input) => {
  const n = Number(input)
  let result = "";
  for (let i = n; i != 0; i--) {
      for(let j = i; j != 0; j--){
        result += "*"
      }
        result += "\n"
  }

  console.log(result);
  rl.close();
});
