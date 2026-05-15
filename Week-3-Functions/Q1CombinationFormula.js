function findFactorial(n) {
    let output = 1;
    for(let i = 1; i <= n; i++) {
        output *= i;
    }

    return Number(output);
}

let bioResult = findFactorial(5) / (findFactorial(2) * findFactorial(5 - 2))

console.log(bioResult);