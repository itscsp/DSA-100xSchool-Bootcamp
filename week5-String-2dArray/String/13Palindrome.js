const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lines  = [];

rl.on('line', (line) => {
    lines.push(line.trim())
})

rl.on('close', () => {
    let word = lines[0]

    let result = isPalindrome(word)

    console.log(result ? 'YES' : 'NO')
    
})

function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) return false;
    left++;
    right--;
  }
  return true;
}   