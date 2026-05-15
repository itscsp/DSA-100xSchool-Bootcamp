/**
 * You are given an array of integers. Find the minimum element in the array and its position.

If multiple positions contain the minimum value, print the smallest position.

Input
First line contains integer 𝑁
 (1≤𝑁≤105)
 — size of the array.
Second line contains 𝑁
 integers 𝐴1,𝐴2,…,𝐴𝑁
 (−109≤𝐴𝑖≤109)
.
Output
Print two integers — the minimum value and its position (1-based index).

Example
InputCopy
6
7 3 4 5 3 10
OutputCopy
3 2
 */

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
    let arrLength = parseInt(lines[0])
    let arrElement = lines[1].split(" ").map(Number);

    let maxEle = arrElement[0]
    let position = arrElement[0]

    for(let i =0; i < arrLength; i++){
        if(arrElement[i] > maxEle){
            maxEle = arrElement[i];
            position = arrElement.indexOf(arrElement[i]) ;
        }
    }

    console.log(Number(maxEle), Number(position+1))

})