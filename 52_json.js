const product = {
  brand: "hp",
  model: "123",
  configuration: {
    ram: "12gb",
    storage: "512gb",
  },
  price: 56000,
  variance: [8, 16, 32],
};

// object to json stringify- JSON.stringify
const productJson = JSON.stringify(product);
console.log(productJson);

// json string to object - JSON.parse
const productObj = JSON.parse(productJson);
console.log(productObj);
