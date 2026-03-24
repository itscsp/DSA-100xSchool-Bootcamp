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


    if(value > 47 && value < 58){
        console.log("Digit")
    } else if(value > 64 && value < 91){
        console.log("Uppercase")
    } else if(value > 96 && value < 123){
        console.log("Lowercase")
    } else {
        console.log("Special")
    }
})