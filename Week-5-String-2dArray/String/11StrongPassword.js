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
    let first = lines[0];  // Full password string, no split!
    let arr = first.split('');
    let lowercase = false, uppercase = false, digit = false, special = false, length = false;
    
    if(first.length === 10) length = true;

    for(let i = 0; i < arr.length; i++){
        let ch = arr[i];
        
        if(ch >= 'a' && ch <= 'z') lowercase = true;
        else if(ch >= 'A' && ch <= 'Z') uppercase = true;
        else if(ch >= '0' && ch <= '9') digit = true;  // String '0'-'9'
        else special = true;
    }

    if(length && lowercase && uppercase && digit && special){
        console.log("Strong")
    } else {
        console.log("Weak")
    }
});
