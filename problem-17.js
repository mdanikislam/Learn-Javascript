/* 
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

*/

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

/* function findAveragePhonePrice(phones){
     let sum = 0;
    for(const phone of phones){
        sum+=phone.price;
        
        let key, count =0 ;
        for(key in phones){
            if(phones.hasOwnProperty(key)){
                count++;
            }
            phonesLength = count;  
        }
    }
    let avg_phone = sum / phonesLength
    return avg_phone;   
    
}

console.log((findAveragePhonePrice(phones))); */
function findAveragePhonePrice(phones) {
  let sum = 0;
  for (const phone of phones) {
    sum += phone.price;
  }
  const phoneLength = phones.length;
  const total = sum / phoneLength;
  return total;
}

console.log(findAveragePhonePrice(phones));
