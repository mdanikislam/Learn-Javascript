/* Haroon is a successful hotelier. His hotel is becoming very popular and it is very important to have a clear idea of ​​his income and expenses at the end of the month. You will create a function to help him calculate the correct tax from his monthly income and expenses.
Your function will take two inputs:
Monthly Income - a positive number that represents Haroon's monthly income.
Monthly Expense - a positive number that represents Haroon's monthly expenses.
The function will calculate 20% of the difference between income and expenses and return it as tax.

Input :
First input: A positive number that represents the monthly income. (0<=income )
Second input: A positive number that represents the monthly expenses. (0<=expense )
Income will always be equal to or greater than expense. (income >=expense)

Output : The function will return the calculated tax. The output can also be a decimal number.

Challenge 📢 : If any input is not a positive number, or if the amount of expense is more than income, then it will return the string "Invalid Input".

Hints 💡: If income is 10000 taka and expense is 3000 taka, then the difference between his income and expense will be
10000-3000 = 7000 taka. So his tax will be (7000 * .20) = 1400 taka. */

/*function signature/sample */
function calculateTax(income, expenses) {
    
   
const different =  income - expenses;
const tax = (different * 0.20);
if(income<=0 || expenses<=0){
    return 'Invalid Input'

}
else if(income>=0 && expenses>=0 &&income>=expenses ){
    return tax
}

}

console.log(calculateTax(7000,3000));
console.log(calculateTax(5000,5000));
console.log(calculateTax(5000,-2000));





