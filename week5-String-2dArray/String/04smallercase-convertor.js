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

    let value = parseInt(char.charCodeAt(0))

   
    if(char >= 'a' && char <= 'z'){
        console.log(char)
    } else {
        let smallerCaseascii = value + 32
        console.log(String.fromCharCode(smallerCaseascii))
    }
})