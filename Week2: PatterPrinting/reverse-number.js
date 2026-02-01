const readline = require('readline');

const rl  = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

function reverseNumber(value){
    let reverseNumber = 0;
    let num = parseInt(value);

    while (num > 0) {
        reverseNumber = reverseNumber * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reverseNumber;
}

rl.question("Enter a 2 digit number", (answer) => {
    
    console.log(reverseNumber(answer))
    rl.close();
})

