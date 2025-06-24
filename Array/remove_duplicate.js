let arr = [1, 2, 2, 3, 4, 3, 5, 1];
let unique = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique);
