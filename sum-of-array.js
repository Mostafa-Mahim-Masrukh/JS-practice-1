let summation = 0;
function sum(numbers){
    for(let i=0;i<numbers.length;i++){
        let num= numbers[i];
        summation =summation+num;
    }
    return summation;
}
const numbers = [1,22,10,15,20,12,5,3,2,9,10];
const result = sum(numbers);
console.log(result);
