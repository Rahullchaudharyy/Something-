const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(function (num) {
  return num % 2 === 0;
});

console.log(hasEvenNumber); // true
