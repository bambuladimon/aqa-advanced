const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arrNum.filter(function (number) {
	return number % 2 === 0; // Повертає true, якщо число парне
});

console.log(evenNumbers);
