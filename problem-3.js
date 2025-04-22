// Calculate the average of the odd numbers  in an array
function oddNum(num){
    let oddNumber =[];
    for(const number of num){
        if(number % 2 ===1){
            oddNumber.push(number)
            
            
        }
        
    }
    console.log("The odd numbers of array is  - ",oddNumber);
    
    // return oddNumber;
    let sum = 0;
    for(const number of oddNumber){
           sum = sum +number;
    }
    console.log("Sum of the odd numbers - ",sum);
    
    const oddLength= oddNumber.length;
    console.log("The length of the odd number array - ",oddLength);
    
    const avg = sum / oddLength;
    return avg;
   
    
}
const oddArray= [10,11,12,13,7,89,99,80,81,45,47,14,20];
console.log("The average of the odd numbers of array is - ",oddNum(oddArray));
