/* 
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/
const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
for (let color of colors) {
//   console.log(color);
  rev_colors.unshift(color);
}
console.log(rev_colors);
