/* function checkNotification(email) {
  if (email.indexOf("@") === -1 || email.split("@").length !== 2) {
    return "Invalid Input";
  }
  const [username, domain] = email.split("@");
  const [domainName, dotCom] = domain.split(".");

  return `${username} sent mail from ${domainName}`;
}
console.log(checkNotification("mdanikislam.cse@gmail.com")); */

// matching product 
/* const products = [
        {id:0, name:'iphon 12', price:85000},
        {id:2, name:'xiaomi phone 15', price:30000},
        {id:3, name:'samsung galaxy', price:40000},
        {id:4, name:'mac book', price:85000},
        {id:5, name:'oppo phone', price:80000},
        {id:5, name:'Phone nothing', price:155000},
        
];
function matchProducts(products, search){
    let matched =[];
    for(let product of products){
        if(product.name.toLowerCase().includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
console.log(matchProducts(products, 'phone')); */


