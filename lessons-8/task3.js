const arrayNum = [1, 2, 3, 4];

let initialVal = 0;
let sumWithInitial = arrayNum.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial);