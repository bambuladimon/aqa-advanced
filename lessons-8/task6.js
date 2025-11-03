const numbersList = [1,10,14,2,4,5,43,34];

function compareNumbers(a, b) {
  return a - b;
}

console.log('Відсорстований мачив -', numbersList.slice().sort(compareNumbers))
console.log('Початковий масив -', numbersList);
