
let factorial = 1;
function findFactorialNumber(Number) {
    for (let i = 1; i <= Number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const Number = 6;
const result = findFactorialNumber(Number);
console.log(result);


