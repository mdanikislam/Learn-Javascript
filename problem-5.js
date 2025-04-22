const person= ['dalim', 'halim', 'dalim', 'ali', 'mali', 'hasan', 'ali', 'akbar'];
const numbers= [10,20,30,40,50,60,50,70,80,90,30,100,10];


function noduplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
console.log(noduplicate(person));


function noDuplicateNumber(numbers){
        const uniqueNumber = [];
        for(const number of numbers){
            if(uniqueNumber.includes(number)===false){
                uniqueNumber.push(number);
            }
        }
        return uniqueNumber;
}
console.log(noDuplicateNumber(numbers));
