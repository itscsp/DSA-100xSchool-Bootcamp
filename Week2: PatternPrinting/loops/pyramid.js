// Given n (no. of rows), print the following pattern:

let number = 6;

for(let i = number; i != 0; i--){
    let char = "";

    for(let j = i; j != 0; j--){
        char += "* "
    }

    console.log(char);
}