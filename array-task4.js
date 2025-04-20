/* 
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

let num = [10,20,50,40];
let nothing = [];
let text = "one";
let age = 25; 
if(Array.isArray(num)){   // just change the variable name for checking is it array or not
    console.log("The variable is Array");
}
else{
    console.log("sorry, The variable is not an Array");
    
}