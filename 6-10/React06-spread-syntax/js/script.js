let user1 = ["ali", "amin", "amir"];
let user2 = ["mobin", "babak", "hasan"];

let allUser = [...user1, ...user2]; // spread-syntax -> array => item
// console.log(allUser);
function showValue(...user) { // rest operator -> item => array
  user.forEach((user) => console.log(user));
}
showValue(...user1);
