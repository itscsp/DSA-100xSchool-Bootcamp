
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
    let [n, x] = lines[0].split(" ").map(Number);
    let arrElement = lines[1].split(" ").map(Number);

    let flog = 'NO';

    for(let i =0; i < n; i++){
      
            if(arrElement[i] === x){
                flog = 'YES'
            }
        
    }

    console.log(flog);

})
