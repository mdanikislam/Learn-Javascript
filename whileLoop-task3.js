/*
Subtask-1:
Display sum of all the odd numbers from 81 to 131.

Subtask-2:
Display sum of all the even numbers from 206 to 311.

 */

// Subtask - 1 
let num = 80;
let sum= 0;
while(num<132){
    num++;
    if(num %2 !=0){
        console.log("odd number - ", num);   
        sum = sum + num;
        console.log("sum of odd number - ", sum);  
    }
}

// Subtask - 2
let num2 = 205;
let sum2=0;
while(num2<311){
    num2++;
    if(num2 % 2 ===0){
        console.log("Even number - ", num2);
        sum2=sum2+num2;
        console.log("Sum of even number - ", sum2);
        
    }
}