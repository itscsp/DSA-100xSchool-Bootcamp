const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

let input = [];

rl.on('line', (line) => {
input.push(line.trim());
});

rl.on('close', () => {
let index = 0;
let t = Number(input[index++]);



while (t--) {
    let n = Number(input[index++]);
    let arr = new Array(n);
    let l = 0;
    let r = n - 1;

    // place odd numbers from left
    for (let i = 1; i <= n; i+=2) {
        arr[l++] = i;
    }

    // place even numbers from right
    for (let i = 2; i <= n; i+=2) {
        arr[r--] = i;
    }

    console.log(arr.join(" "));
}

});
