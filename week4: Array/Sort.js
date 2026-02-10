const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {

    let index = 0;
    const t = Number(lines[index++]);

    for (let i = 0; i < t; i++) {

        const n = Number(lines[index++]);
        const arr = lines[index++].split(' ').map(Number);

        let zeroCount = 0;


        for (let j = 0; j < n; j++) {
            if (arr[j] === 0) zeroCount++;
        }
        let result = [];

        for (let j = 0; j < zeroCount; j++) {
            result.push(0);
        }

        for (let j = zeroCount; j < n; j++) {
            result.push(1);
        }

        console.log(result.join(' '));
    }

});
