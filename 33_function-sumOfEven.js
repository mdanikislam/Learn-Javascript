function sumofEven(numbers){
    let sum = 0;
    for(let number of numbers){
        if(number % 2 === 0){
             console.log(number);
             
            sum +=number;
        }
    }
    return sum;
}
let result = [11,15,14,16,10,18,17,55,99,100];
console.log("Sum of the Even number in Array is - ",sumofEven(result));

