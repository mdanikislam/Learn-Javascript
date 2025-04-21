/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.

Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */

// Subtask - 1 sum of odd numbers
let sum = 0;
for (let i = 91; i < 129; i = i + 2) {
  sum = sum + i;
  // console.log(i);
  //  console.log(sum);
}

// Subtask - 2 sum of even number
let sum2 = 0;
for (let x = 50; x <= 58; x = x + 2) {
  sum2 = sum2 + x;
  // console.log(x);
  console.log(sum2);
}
