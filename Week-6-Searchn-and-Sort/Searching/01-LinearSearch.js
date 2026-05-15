const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = []

rl.on('line', (line) => {
    lines.push(line.trim());
})

rl.on('close', () => {
    const arrLength = parseInt(lines[0])
    const arrElement = lines[1].split(' ').map(Number);
    const searchEle = parseInt(lines[2])

    for(let i =0 ; i < arrLength; i++) {

        if(arrElement[i] == searchEle){
            console.log('YES')
            return
        } 
    }


    console.log('NO')
    return;
        
    
})