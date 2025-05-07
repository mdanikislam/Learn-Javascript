// Your are given an array say: [33,50,79,78,90,101,30]. Now return/ get all the elements which are divisible by 10 using array.find() method. Then compare the outpur of filter method

const numbers = [33, 50, 79, 78, 90, 101, 30];
const getNum = numbers.find((num) => num % 10 === 0); // return the first value in possible answer
const getNum2 = numbers.filter((num) => num % 10 === 0); // return the full element
console.log(getNum);
console.log(getNum2);
