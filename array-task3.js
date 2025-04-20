/* 
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
 */

let books = ["bangla", "math", "english", "history", "social science", "geography", "javascript", "java"];
if(books.includes("javascript")){
    console.log("The element is present in the array");
}
else{
    console.log("Sorry, The element is not present in the array");
    
}
