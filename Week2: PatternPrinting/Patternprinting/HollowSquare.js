const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (input) => {
    let n = Number(input);
    let result = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            if(j == 1 || j == n){
                result += "*";
            } else {
                if(i==1 || i == n){
                    result += "*";
                } else {
                    result += " ";
                }
            }
        }
        result += '\n';
    }
    console.log(result);
    rl.close();
})