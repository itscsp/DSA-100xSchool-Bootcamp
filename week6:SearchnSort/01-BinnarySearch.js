
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

    let f = 0
    let l = arrLength

    while(f <= l){
        let mid = Math.floor((f + l) / 2)

        if(arrElement[mid] === searchEle){
            console.log('Yes')
            return;
        } else if (arrElement[mid] < searchEle) {
            f = mid + 1;
        } else {
            l = mid - 1
        }
    }

    console.log('No')
    return;

})