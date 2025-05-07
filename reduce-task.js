/* 
const people = [
{name:'Meena', age:20}
{name:'Jorina', age:15}
{name:'chokina', age:22}
]
1.Follow above array of objects. So you have 3 objects as array element. Can you find out the total sum from here?
20+15+22=57. The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it. 
But! Wait!! WAit!! Do the same task using array.reduce()method
*/
const people = [
    {name:'Meena', age:20},
    {name:'Jorina', age:15},
    {name:'chokina', age:22}
    ]
const total = people.reduce((a, n)=>a+ n.age ,0)
console.log(total);
