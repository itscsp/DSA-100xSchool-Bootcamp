const readLine = require('readline');

const rl = readLine.createInterface(
    {
        input:process.stdin,
        output: process.stdout,
        terminal: false

    }
)

rl.on('line', (input) => {
    let n = Number(input);
    let result = '';

    for(let i = 1; i <= n; i++) {
      for(let s = 1; s <= n-i; s++){
        result += " ";
      }

      for(let j = 1; j <= i; j++){
        result += "* ";
      }
      result += "\n"
    }

    console.log(result);

    rl.close()
})