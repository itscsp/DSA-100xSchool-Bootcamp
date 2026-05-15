
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

    let counter = 0;

    for(let i =0; i < n; i++){
      
            if(arrElement[i] === x){
                counter++
            }
        
    }

    console.log(counter);

})
