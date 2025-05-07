// pass by referance  
const student1 = { name: "akil", age: 20 };
const student2 = { name: "abul", age: 30 };
function MakeMovie(std1, std2) {
  std1.name = "anika";
  std2.name = "monika";
}
console.log(student1, student2);
MakeMovie(student1, student2);
console.log(student1, student2);

const number = [10, 20, 30, 40];
function numberChange(num){
    num[0]=500;
}
console.log(number);
numberChange(number);
console.log(number);


// passed by value 
let name1 = "anik";
let name2 = "mamun";
function nameChange(nm1, nm2){
    nm1 = "bulbul";
    nm2 = "chokina";
    return [nm1, nm2]
}
console.log(name1, name2);

[name1, name2] = nameChange(name1, name2)
console.log(name1, name2);






