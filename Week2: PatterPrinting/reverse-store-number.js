const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (input) => {
    let n = BigInt(input);
    
    let ans = 0n;
    while(n !== 0n){
        ans = (ans * 10n) + (n % 10n);
        n = n / 10n;
    }
    
    console.log(ans.toString());
    rl.close();
});
