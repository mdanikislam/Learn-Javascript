/* const phones= [
    {
        name:'iphone', price:80000
    },
    {name:'samsung', price:50000},
    {name:'xiomi', price:20000},
    {name:'itel', price:10000}
]

function getP(phones){
    let min = phones[0];
    for(const phone of phones){
    if(phone.price<min.price){
        min = phone;
    }        
        
    }
    return min;
}

console.log("lowest price - ",getP(phones)); */

/* // sum of a Array
const numbers = [10,20,30,40,50,6,0];
function sumNum(numbers){
       let sum = 0;
    for(const number of numbers){
        sum+=number
    }
    return sum
}
console.log(sumNum(numbers));
 */

// sum of boject value
/* const products = [
    {name:'shirt', price:2500, quantity:2},
    {name:'pant', price:3500, quantity:3},
    {name: 't-shirt', price:1200, quantity:2},
    {name: 'shoe', price:5600, quantity:1}
];

function totalCost(products){
    let producctPrice = 0;
    for(const product of products){
        const totalProducts = product.price * product.quantity;
          producctPrice+= totalProducts;
    }
    return producctPrice;
}
console.log("Total products price -",totalCost(products)); */


