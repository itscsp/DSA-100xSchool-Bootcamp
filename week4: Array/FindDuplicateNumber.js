/**
You have been given an integer array of size 𝑁
 which contains numbers from 0
 to (𝑁−2)
. Each number is present at least once. Among these, there is a single integer value that is present twice.

You need to find the duplicate number present in the array.

Input
The first line contains a single integer 𝑡
 (1≤𝑡≤100)
 — the number of test cases.

The first line of each test case contains an integer 𝑁
 (0≤𝑁≤1000)
. The second line contains 𝑁
 integers representing the array/list.

Output
For each test case, print the duplicate number in the array.

Examples
InputCopy
1
9
0 7 2 5 4 7 1 3 6
OutputCopy
7
*/


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

        if(counter == 2){
            ans = arr[i];
            break;
        }

    }

    console.log(ans);
}

});
