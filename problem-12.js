//  Simple calculator to call function inside a function
function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2;
}


function calculator(a, b, operations){
    if(operations === 'add'){
        return add(a,b)
    }
    else if(operations === 'substract'){
        return substract(a, b);
    }
    else if(operations === 'multiply'){
        return multiply(a,b);
    }
    else if(operations === 'divide'){
        return divide(a,b);
    }
}
const result = calculator(6,6, 'divide');
console.log(result);
