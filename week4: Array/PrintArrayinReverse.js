/*
You are given an array of integers.

Print the elements of the array in reverse order.

Input
First line contains integer 𝑁
 (1≤𝑁≤105)
 — size of the array.
Second line contains 𝑁
 integers 𝐴1,𝐴2,…,𝐴𝑁
 (−109≤𝐴𝑖≤109)
.
Output
Print the elements of the array in reverse order.

Example
InputCopy
5
1 2 3 4 5
OutputCopy
5 4 3 2 1

*/const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    const arrLength = parseInt(lines[0]);
    const arrElement = lines[1].split(' ').map(Number);
    
    let result = [];
    for(let i = 0; i < arrLength; i++) {
        result.push(arrElement[arrLength - 1 - i]);
    }
    
    console.log(result.join(' '));
});
