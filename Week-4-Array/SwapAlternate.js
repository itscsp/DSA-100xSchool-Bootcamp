
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', (line) => {
    input.push(line.trim())
})
rl.on('close', (line) => {
    let index = 0
    let t = Number(input[index++]);
    

    while (t--) {
        let arrSize = Number(input[index++])
        let arrElement = input[index++].split(" ").map(Number)

        for(let i = 0; i < arrSize-1; i+=2){
            let temp = arrElement[i];
            arrElement[i] = arrElement[i+1]
            arrElement[i+1] = temp
        }
        console.log(arrElement.join(" "))
    }

})