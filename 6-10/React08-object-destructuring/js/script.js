let user = {
  id: 1,
  name: "ali",
  family: "Marzi",
  age: 23,
};

let { name, id: userId, age, family } = user;
console.log(userId, name, family, age);