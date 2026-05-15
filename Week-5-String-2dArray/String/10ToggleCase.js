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

    for(let i = 0; i<line.length; i++){
        if(line[i] === line[i].toUpperCase()) {
            result += line[i].toLowerCase()
        } else {
            result += line[i].toUpperCase()
        }
    }

    console.log(result)
})