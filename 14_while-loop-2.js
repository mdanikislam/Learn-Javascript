/* let num = 1;
let sum  = 0;
while(num<=10){
    console.log(num);
    sum = sum+num;
    console.log("sum", sum);
    
    num++;
    
}
 */

// even number 
let num=0;
/* while(num<10){
    console.log(num);
    num++;
    if(num %2 ===0){
        console.log("Even number ", num);
        
    }
    else{
        console.log("Odd number ", num);
        
    }
} */

    // using tenarry operator 
while(num<10){
    console.log(num);
    num++;
    num%2===0 ? console.log("Even number ", num) : console.log("Odd number ",num); 
    
}