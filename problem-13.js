// check validation

// check string validation
function checkString(first, second) {
  if (typeof first !== "string" || typeof second !== "string") {
    return "pleas input string data";
  }
  const full = first + " " + second;
  return full;
}
console.log(checkString('anik', 5));


// check number validation
function checkNumber(num1, num2){
    if(typeof num1 !=='number' || typeof num2 !== 'number'){
        return 'Please insert number'
    }
    const total = num1 + " " + num2
    return total;
}
console.log(checkNumber(5,true));
