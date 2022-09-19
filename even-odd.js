function findOddEven(number){

if(number%2== 0){
    return 'even';
}
else{
    return 'odd';
}
}
const Result = findOddEven(101);
console.log('result is',Result)