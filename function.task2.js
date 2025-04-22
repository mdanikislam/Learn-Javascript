/* 
Take a number if the number is odd multiply it by 2 and return the result. 
*/

function number(num){
    if(num % 2 ===1){
       let oddNum = num *2;
    return oddNum;  
    }
   else{
     return num;  
   }
}
console.log(number(7));

