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
    let [first] = lines[0].split(" ").map(String);
    let [second] = lines[1].split(" ").map(String);
 
 
    if(first === second){
        console.log('Equal')
    } else if(first < second){
        console.log('A') 
    } else {
        console.log('B') 
    }
 
})