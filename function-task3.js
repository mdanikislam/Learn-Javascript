/* 
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/
function make_avg(arr, size) {
    if (size === 0) return 0; // Avoid division by zero

    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
  
    return sum / size;
  }
  
  const numbers = [10, 20, 30, 40, 50];
  const size = numbers.length;
  const average = make_avg(numbers, size);
  
  console.log("Average:", average); // Output: Average: 30
  
