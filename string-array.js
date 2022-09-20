const myAddress = '90 no Home,14 Road,Nikunjo,Dhaka';
const myAddressDone = myAddress.toLowerCase();
console.log(myAddressDone);
const result = myAddress.includes('dhaka');
if (myAddressDone.indexOf('dhaka') !== -1) {
    console.log('Existing');
}
else {
    console.log('not existing');
}



// console.log(result);