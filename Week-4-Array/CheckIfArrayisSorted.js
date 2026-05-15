
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

let lines = []

rl.on('line', (line) => {
    lines.push(line.trim());
})

rl.on('close', () => {
    let n =  parseInt(lines[0])
    let arrElement = lines[1].split(" ").map(Number);

    let flag = true;
    
    for(let i =0; i < (n-1); i++){
        if(arrElement[i] > arrElement[i+1]){
            flag = false
            break;
        }
    }

    console.log(flag? 'YES' : 'NO');

})
