function returnEven(numbers){
    let evenArray = []; 
for(let number of numbers){
   if(number % 2 === 0){
    evenArray.push(number)  
}
}
return evenArray

}

let result = [10,11,15,14,12,18,47,87,99,81,23,53,50,78,0];
console.log(returnEven(result));
