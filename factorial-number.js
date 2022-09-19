
let factorial = 1;
function findFactorialNumber(Number) {
    for (let i = 1; i <= Number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

const Number = 8;
const result = findFactorialNumber(Number);
console.log(result);
