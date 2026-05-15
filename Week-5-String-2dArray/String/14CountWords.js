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
    let result = line.split(" ")
    

    console.log(result.length)
})