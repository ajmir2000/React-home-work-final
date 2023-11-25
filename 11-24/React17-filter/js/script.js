// let num = [2, 3, 4, 6, 33, 7, 12, 86];

// let filterNum = num.filter(function (number) {
//   console.log(number);
//   return number > 10;
// });
// console.log(filterNum);

/////////////////////////////////////////////////////////////////////////////

let allProducts = [
  { id: 1, name: "laptop", price: 700_000 },
  { id: 2, name: "watche", price: 10_000 },
  { id: 3, name: "phone", price: 9_000 },
];

let filterProducts = allProducts.filter(function (product) {
  console.log(product);
  return product.price > 400_000;
});
console.log(filterProducts);
