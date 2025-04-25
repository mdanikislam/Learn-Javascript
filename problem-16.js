/* 
Your task is to calculate the total budget required to buy electronics:
    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of (quantity) laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopQ, tabletQ, mobileQ){
    const laptop = 35000;
    const tablet = 15000; 
    const mobile = 20000;
    const laptoPrice = laptop * laptopQ;
    const tabletPrice = tablet * tabletQ;
    const mobilePrice = mobile *  mobileQ;

    return laptoPrice + tabletPrice + mobilePrice;

}
console.log(calculateElectronicsBudget(1,2,3));
