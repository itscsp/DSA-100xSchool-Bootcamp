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
    let [firstPartA, firstPartB] = lines[0].split(" ").map(String);
    let [secondPartA, secondPartB] = lines[1].split(" ").map(String);
 
 
    if(firstPartB === secondPartB){
        console.log('YES')
    } else {
        console.log('NO') 
    }
 
})