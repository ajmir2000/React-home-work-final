let scores = [3, 4, 6, 7, 8, 9, 12, 34, 67];

let mapResult = scores.map((score, index) => {
  console.log(index, score);
  return score * 2;
});

console.log(mapResult);