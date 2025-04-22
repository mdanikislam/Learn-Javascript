// simple way 
function isLeapYear(year){
    if(year %4 ===0 ){    
        return true;    
    }
    else{
        return false;
    }
}
let result = isLeapYear(2052);
// console.log(result);



// actual formula 
//if the year is not divisible by 100 and divisible by 4 then it is leap year
//  if the year is divisible by 400 then it is leap year
function isLeapYear2(number){
    if(number % 100 !==0 && number % 4 ===0){
        return true; 
    }
    else{
        return false;
    }
}
console.log(isLeapYear2(2026));
console.log(isLeapYear2(2027));
console.log(isLeapYear2(2028));
console.log(isLeapYear2(2030));
