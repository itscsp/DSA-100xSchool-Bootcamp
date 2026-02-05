/**
 * You are given an array of integers.

Find the sum of all elements of the array.

Input
First line contains integer 𝑁
 (1≤𝑁≤105)
 — size of the array.
Second line contains 𝑁
 integers 𝐴1,𝐴2,…,𝐴𝑁
 (−109≤𝐴𝑖≤109)
.
Output
Print a single integer — the sum of the array elements.

Example
InputCopy
5
1 2 3 4 5
OutputCopy
15
 */

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

let lines = []

rl.on('line', (line) => {
    lines.push(line.trim());
})

rl.on('close', () => {
    const arrLength = parseInt(lines[0])
    const arrElement = lines[1].split(' ').map(Number);

    let result = 0;

    for(let i=0; i<arrLength; i++){
        result = result+arrElement[i];
    }
    console.log(result);
});