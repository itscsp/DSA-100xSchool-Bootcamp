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
        result += '** \n';
    }

    console.log(result);

    rl.close()
})