// let number = [2, 3, 5, 6, 2, 6, 9, 7, 8, 6, 4, 8, 7, 8, 7];
// let result =  number.reduce(function(prev, current){
//     console.log(prev, current);
//     return prev + current
// })
// console.log(result);

///////////////////////////////////////////////////////////////

let allProducts = [
  { id: 1, name: "laptop", price: 700_000 },
  { id: 2, name: "watche", price: 10_000 },
  { id: 3, name: "phone", price: 9_000 },
];
let totalPrice = allProducts.reduce(function (prev, current) {
  console.log(prev, current);
  if (prev.price) {
    return prev.price + current.price;
  } else {
    return prev + current.price;
  }
});
console.log(totalPrice);
