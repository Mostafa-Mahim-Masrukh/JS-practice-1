let summation = 0
function sum(array) {
    for (let i = 0; i < array.length; i++) {
        let number = (array[i]);
        if (number % 2 == 0) {
            summation = summation + number;
            // console.log(summation);
        }
    }
    return summation;
}
const array = [2, 1, 4, 4, 10, 100, 1, 5, 7, 9, 200];
const result = sum(array);
console.log("summation of the odd numbers is:", result);