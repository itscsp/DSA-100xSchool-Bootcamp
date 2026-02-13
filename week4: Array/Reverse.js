const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines = []

rl.on('line', (line) => {
    lines.push(line.trim())
})

rl.on('close', () => {
    let n = parseInt(lines[0]);

    let arrElement = lines[1].split(" ").map(Number);

    let left = 0;
    let right = arrElement.length - 1

    while(left < right){
        let temp = arrElement[left];
        arrElement[left] = arrElement[right];
        arrElement[right] = temp;

        left++;
        right--;
    }

    console.log(arrElement.join(" "))
})