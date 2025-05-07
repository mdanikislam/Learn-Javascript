// You are given an array sa: [33,50,79,78,90,101,30]. Now return/get all the elements which are divisible by 10 using array.filter() method.

// task 2
// You have an array of objects:
/* 
const instructor = [
{name:'Nodi', age:28, position:'Senior'}
{name:'Anik', age:26, position:'Junior'}
{name:'Akil', age:30, position:'Senior'}
]

Your task is to display the instructor names that has the position senior using filter 
*/

// task - 1
const numbers = [33, 50, 79, 78, 90, 101, 30];
const result = numbers.filter((num) =>num %10===0);
// console.log(result);

// task 2 
const instructor = [
    {name:'Nodi', age:28, position:'Senior'},
    {name:'Anik', age:26, position:'Junior'},
    {name:'Akil', age:30, position:'Senior'}
    ]
const senior = instructor.filter(person => person.position ==='Senior').map(person => person.name);
console.log(senior);
