// Given n (no. of rows), print the following pattern:

let number = 6;

for(let i = 1; i <= number; i++){
    let char = "";

    for(let j = 1; j <= number; j++){
        if( i == 1 || j == 1){
            char += "* "
            continue;
        } 

        if( i == number || j == number){
            char += " *"
            continue;
        } 

        char += " ";

        

    }

    console.log(char);
}