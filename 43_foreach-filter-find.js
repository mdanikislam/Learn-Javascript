// forEach  => not return 
const numbers = [1,2,3,4,5,6];
const resutl = numbers.forEach(num=>num*2);
// console.log(resutl); // undefined :because foreach not return


//   filter => selects elements based on a condition and returns an array with the elements that fullfilled the condition;
const players = [75,65,67,68,80,69];
const selected = players.filter(p=>p>70);
// console.log(selected);

// find => similar to filter but return the first value in the array 
const selectedFind = players.find(p=> p>60)
console.log(selectedFind);

