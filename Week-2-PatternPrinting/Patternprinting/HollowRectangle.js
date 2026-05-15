const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", (input) => {
    const [rows, cols] = input.split(" ").map(Number);

    let result = '';
    for(let i = 1; i <= rows; i++){
        for(let j = 1; j <= cols; j++){
            if(j == 1 || j == cols){
                result += "*";
            } else {
                if(i==1 || i == rows){
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