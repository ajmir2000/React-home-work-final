// let array = [12, "ali", true, 21, "babak"];

// let [item1, , item2, item3] = array;

// console.log(item1, item2, item3);

///////////////////////////////////////////////////////////////
const makeNumber = () => {
  return [40, 80];
};

let [a = 5, b = 17] = makeNumber(); // [40, 80]
console.log(a, b);
