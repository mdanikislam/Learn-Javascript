function sum(a, b, c) {
    const args = [...arguments];
//   const args = arguments;
  console.log(args);

  const result = a + b + c;
  return result;
}
console.log(sum(10, 20, 30, 40));
