/* 
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(array){ 
    let unique = heights2[0];
    for(const item of array){
       if(unique.length>item.length){
        unique =item;
        
    }
}
console.log(unique.length);
return unique ;
    
}
console.log(smallestName(heights2));
