const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on("line", (line) => {
    lines.push(line.trim());
})

rl.on('close', () => {
    let [char] = lines[0].split(" ").map(String);

    console.log(char.charCodeAt(0))
})