// Given n (no. of rows) and m (no. of cols) , print the following pattern:

let number = 7
let m = 7

for(let i = 1; i <= number; i++) {
    let stars = ""
    for(let j = 1; j<= m; j++){
        stars += "* ";
    }
    console.log(stars)
}