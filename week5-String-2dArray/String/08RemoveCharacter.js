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
    let arr = first.split('');
    let point = 0;

    if(first.length == 10){
        point = 1;
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 'a' && arr[i] < 'z' ){
            point += 1
        } else if(arr[i] > 'A' && arr[i] < 'Z' ){
            point += 1
        } else if(arr[i] >= 0 && arr[i] <= 9 ){
            point += 1
        } else {
            console.log('special')
        }
    }
    console.log(result)
})