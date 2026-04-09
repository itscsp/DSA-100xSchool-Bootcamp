const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = [];

rl.on("line", (line) => {
    lines.push(line.trim());
})

rl.on('close', () => {
    let line = lines[0];
    let result = ''
    let length = line.length - 1

    for(let i = 0; i <= length; i++){
        result += line[length - i]
    }

    console.log(result)
})