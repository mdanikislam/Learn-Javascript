// Write a simple JavaScript program to join all elements of the following array into a string.

// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());

console.log(myColor.join());

console.log(myColor.join('+'));


