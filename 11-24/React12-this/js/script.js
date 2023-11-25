function clickHandler(param) {
  param.style.background = "red";
  console.log(param);
}

function showValue() {
  console.log(this);
}
showValue();

let user = {
  id: 2,
  userName: "Ajmir",
  age: 22,
  showAge: function () {
    console.log(this.age);
  },
};
user.showAge();
console.log(user.showAge);
