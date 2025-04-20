/*  operators - 
1. Arithmatic operators (+, -, *, /, %%, ++, --)
2. Assignment operators ( =, +=, -=, *=, /=, %=, **=)
3. Comparison Operators (==, ===, !=, !==, <, >, >=, <=,?)
4. String Operators (var text = "abcd")
5. Logical Operators (&&, ||, !)
6. Bitwise Operators (&, |, ~, ^, <<, >>, >>>)
7. Ternary Operators (  ?  :  )
8. Type Operators (typeof, instanceof) 
*/

// 1. Arithmatic operators (+, -, *, /, %%, ++, --)
let a = 3;
let x = (100 + 50) * a;
console.log(x);

// 2. Assignment operators ( =, +=, -=, *=, /=, %=, **=)
let num2 = 10;
num2 += 5;
console.log(num2);

// 3. Comparison Operators (==, ===, !=, !==, <, >, >=, <=,?)
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(result);

// 4. String Operators (var text = "abcd")
let text3 = "John";
let text4 = "Doe";
let result4 = text3 + " " + text4;
console.log(result4);

// 5. Logical Operators (&&, ||, !)
let salary = 20000;
let age = 25;
if(salary>25000 && age>= 25)
    {
    console.log("You will get Married");   
}
else{
    console.log("You will get Rejected");  
}

// 7. Ternary Operators (  ?  :  )
salary>25000 && age>=25 ? console.log("Its Okay") : console.log("Reject");

// 8. Type Operators (typeof, instanceof) 
let name = "Anik"; // string
console.log(typeof name); 





