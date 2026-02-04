const readline = require('readline');

const rl  = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

function numberCounter(value){
    let counter = 0;
    let num = parseInt(value);

    while (num > 0) {
        counter += (num % 10);
        num = Math.floor(num / 10);
    }

    return counter;
}

rl.question("Enter number", (answer) => {
    console.log(numberCounter(answer))
    rl.close();
})

