// let user = {
//   id: 2,
//   userName: "Ajmir",
//   age: 22,
//   showAge: function () {
//     console.log(this.age);
//   },
// };
// user.showAge();
// let showAgeFunc = user.showAge.bind(user);
// showAgeFunc()

///////////////////////////////////////////////////////

let user1 = {
  id: 1,
  userName: "Amin",
  age: 21,
};

let user2 = {
  id: 2,
  userName: "Ali",
  age: 11,
};
function showAge() {
  console.log("your age", this.age);
}
let resultUser1 = showAge.bind(user1);
let resultUser2 = showAge.bind(user2);
resultUser1();
resultUser2();
