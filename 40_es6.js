//  Object.keys, Object.values, Object.entries
// - template string 
const a = 56;
const numbers = [50,70];
const person = {
    name:'Anik Islam'
};
const message = `Hi, ${person.name} has a: ${a} access to ${numbers[1]}`
// console.log(message);

// ----Distructuring----
const {name, age, ...others}={age:28, name:'Anik Islam', x:5, y:10}
// console.log({...others});

