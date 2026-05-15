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
        result += '* '
      }
      result += "\n"  
  }

    for (let i = n-1; i != 0; i--) {
      for(let j = i; j!=0; j--){
        result += '* '
      }
      result += "\n"  
  }

  console.log(result);
  rl.close();
});
