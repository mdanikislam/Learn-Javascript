function sumOfArray(numbers) {
    let sum = 0;
  for (let number of numbers) {
    // console.log(number);
    sum +=number;
  }
  return sum;
}
let result = [10,20,30,40,50]
console.log(sumOfArray(result));
