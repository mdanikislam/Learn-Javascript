// BMI Calculator and Healthy Category using condition
/* Create a Javascript program that calculates the Body Mass Index (Bmi)
-Calculate BMI using the  formula : BMI = weight(kg) / (height (m))^2
-BMI < 18.5, you are underweight. 
-BMI >= 18.5 and BMI <= 24.9, you are normal.
-BMI >= 25 and BMI <= 29.9, you are overweight.BMI
-Otherwise, you are obese */

const weight = 78;
const height = 1.73;
const bmi = weight / (height*height);
if(bmi<18.5){
    console.log("You are Underweight");
    
}
else{
    if(bmi>= 18.5 && bmi <=24.9 ){
        console.log("You are normal");
        
    }
 else if(bmi >= 25 && bmi<= 29.9){
    console.log("You are over weight");
 }
 else{
    console.log("Otherwise, You are obese");
    
 }
}
console.log("Your bmi is - ",bmi.toFixed(2));


 