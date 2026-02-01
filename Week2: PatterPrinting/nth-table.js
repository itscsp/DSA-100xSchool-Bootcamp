const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter you number: ", (answer) => {
  if (typeof answer != Number) {
    console.log("ERROR! \nEnter valid number!");
    rl.close();
  } else {
    
    for (let i = 1; i <= 10; i++) {
      console.log(answer + " * " + i + " = " + answer * i);
    }
    rl.close();
  }
});
