const numbers = [2,3,5,7,13];
const total = numbers.reduce((p, c)=>p+c,0)
// console.log(total);

const products = [
    {id:1, name:'phone', price:50000},
    {id:1, name:'laptop', price:150000},
    {id:1, name:'tablet', price:20000},
    {id:1, name:'tv', price:60000}
]

// map 
const names = products.map(product => product.name)
// console.log(names);
const  prices= products.map(p=>p.price)
// console.log(prices);


// filter 
const price = products.filter(p=> p.price>50000);
console.log(price);


// reduce 
const totalPrice =products.reduce((a, c)=>a+c.price,0);
console.log(totalPrice);
 

