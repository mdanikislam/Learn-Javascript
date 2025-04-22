// // Calculate the average of the even numbers  in an array
function avg_even(avg){
    let evenArray= [];
    for(const number of avg){
        if(number % 2 ===0){
            evenArray.push(number);
        }
    }
    console.log("The even numbers in array - ",evenArray);
    let evenSum = 0;
    for(number of evenArray){
        evenSum+=number
    }
    console.log("The sum of even numbers is - ",evenSum);
    const evenLeangth = evenArray.length
    console.log("The length of the even number array  - ",evenLeangth);
    const evenAvg = evenSum / evenLeangth;
    return evenAvg.toFixed(2);
    
    
    
}
const inputValue = [5,6,8,9,10,15,16,18,19,22,70,78,89,99,100];
console.log("the average of the even numbers of the array is ",avg_even(inputValue));
