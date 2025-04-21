/*
Subtask-1:

Find all the odd numbers from 61 to 100.

Subtask-2:

Find all the even numbers from 78 to 98.

 */

// Subtask-1
let num =60;
while(num<100){
    num++;
    if(num % 2 != 0){
        console.log("Odd number ", num);
        
    }
}

// Subtask - 2
let num2 =77;
while(num2<99){
    num2++;
    if(num2 % 2 ===0){
        console.log("Even number ", num2);
        
    }
}