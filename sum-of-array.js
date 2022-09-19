let summation = 0;
function sum(numbers){
    for(let i=0;i<numbers.length;i++){
        let num= numbers[i];
        summation =summation+num;
    }
    return summation;
}
const numbers = [10,20,30,40,50,60,70,80,90,100];
const result = sum(numbers);
console.log(result);
