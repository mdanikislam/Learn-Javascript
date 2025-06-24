
let array_clone = (arr1)=>{ return arr1.slice(0)}
console.log(array_clone([1,2,3,4]));
console.log(array_clone([1,2,[4,0]]));

// spread operator
let x = [1,2,3,4,5];
console.log(x); // original array
let y = [...x];
console.log(y); // clone from x

// using slice to clone 
const a = [4,5,6,7,8];
const b = a.slice();
console.log(b);

