// var - let - const

// var num1 = 10;
// let num2 = 20;

// var num1 = 15;
// let num2 = 25;

// console.log(num1);
// console.log(num2);

// var num1 = 10;
// {
//   var num1 = 20;
//   console.log("local", num1);
// }
// console.log("global", num1);

// let num1 = 10;
// {
//   let num1 = 20;
//   console.log("local" , num1);
// }
// console.log("global" , num1);

const num1 = 10;
{
  const num1 = 20;
  console.log("local", num1);
}
console.log("global", num1);
