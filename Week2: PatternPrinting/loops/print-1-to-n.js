const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (input) => {
    let n = Number(input);
    
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
    
    rl.close();
});