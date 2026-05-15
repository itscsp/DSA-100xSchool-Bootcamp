/**
You are given an integer array of size 𝑛, where 𝑛=2𝑚+1.

In this array, exactly 𝑚 numbers appear twice, and exactly one number appears only once. Your task is to find and return that unique number.

Input
The first line contains an integer 𝑡
 (1≤𝑡≤100) — the number of test cases.

Each test case consists of two lines:

The first line contains a single integer 𝑛
 (1≤𝑛≤1000
, 𝑛
 is always odd).
The second line contains 𝑛
 integers 𝑎1,𝑎2,…,𝑎𝑛
 (1≤𝑎𝑖≤106
) — the elements of the array.
It is guaranteed that in each test case there is exactly one element that appears once, and all others appear exactly twice.

Output
For each test case, print a single integer, the unique element.

Examples
InputCopy
1
7
2 3 1 6 3 6 2
OutputCopy
1
*/

const { count } = require('console');
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
    let arr = input[index++].split(" ").map(Number);
    

    let ans = 0;

    for(let i = 0; i<n; i++){
        let target = arr[i];
        let counter = 0

        for(let j = 0; j < n ; j++){
            if(arr[j] == target) {
                counter++;
            }
        }

        if(counter == 1){
            ans = arr[i];
            break;
        }

    }

    console.log(ans);
}

});
