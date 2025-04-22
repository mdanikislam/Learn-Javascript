// Unit Converter 
function inchToFeet(inch){
    const feetFraction= inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result  = feetNumber + " ft " + inchRemaining + " inch ";
    return result;
}
// console.log(inchToFeet(68));


function meterToCm(num){
    const result  = num *100;
    return result;
}
console.log(meterToCm(5)+" cm");
