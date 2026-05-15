const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (input) => {

    let result = "";
    for(let i=1; i<=Number(input); i++){
        for(let j = 1; j <= Number(input); j++){
            result += "*"
        }
        result += '\n';
    }

    console.log(result);
    rl.close();
})