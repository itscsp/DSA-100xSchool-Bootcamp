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
    let [c1, c2] = lines[1].split(" ").map(String);

    let arr = first.split('');
    let result = '';

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == c1){
            arr[i] = c2
        }
        result = result + arr[i]
    }
    console.log(result)
})