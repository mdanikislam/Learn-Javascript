// data access in array in objects
const data = [{id:1, name:'abul', address:'kocu khet'}];
// console.log(data[0].address);


const products ={
    count:5000,
    data:[{
        id:1, name:'lenovo laptop', price:50000
    },
    {id:2, name:'hp laptop', price:65000}
]
}
// console.log(products.data[0]);
// console.log(products.data[1]);

// optional chain 
const user ={
    id:1,
    name:'anik',
    address:{
        present:'Mirpur',
        parmanent:{
            location:'Savar',
            street:{
                name:'nabinagar'
            }
        },
        location:'Sherapara'
    }
}

console.log(user.address.market?.second);
console.log(user.address.parmanent.street?.name);



