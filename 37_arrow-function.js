// function decleration 
/* function sum (a, b){
    return a+b ;
}
console.log(sum(5,10)); */
//------------------------------------
// function expression 
/* const divide = function(a,b){
    return a / b;
}
console.log(divide(10,5)); */
//---------------------------------------

// -------------Arrow function ------------
const multiply = (a,b) => a*b;      
console.log(multiply(5,7));

// large arrow function. If you want to get anything returned from this function. Then you have to use the return keyword.
const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum +mult;
    return result;
}
console.log(doMath(1,2,3));



