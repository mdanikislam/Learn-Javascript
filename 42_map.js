 const number = [2,4,6,8,10];
/* const number = [2,4,6,8,10];
const doubled = [];
for(const num of number){
    const double = num *2;
    doubled.push(double);
}
console.log(doubled); */

// map==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
const doublIt = num=>num*2;
const result = number.map(doublIt);
// console.log(result);

const numbers2 = [10,20,30,40,50];
console.log(numbers2.map(num=>num*num));


