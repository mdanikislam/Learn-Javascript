/* 
sort() by default sorts as strings, which can give wrong results for numbers.

So, we use (a, b) => a - b to sort numerically in ascending order.
*/
let arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
let sorted = arr.sort((a, b) => a - b);
console.log(sorted);