/* 
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function findDuplicate (num, find){
    let count = 0 ;
    for(const number of num){
        if(number ===find){
            count++;
        }
    }
    return count;
}
const num1 = [5,6,11,12,98, 5];
const num2 = [5,6,11,12,98, 5];
console.log(findDuplicate(num1,5));
console.log(findDuplicate(num2,25));

