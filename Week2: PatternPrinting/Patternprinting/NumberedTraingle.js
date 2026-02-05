const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});


rl.on("line", (input) => {
  const n = Number(input)
  let result = "";
  for (let i = 1; i <= n; i++) {
      for(let j = 1; j <= i; j++){
        result += String(i)
      }
        result += "\n"
  }

  console.log(result);
  rl.close();
});
