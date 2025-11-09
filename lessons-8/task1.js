const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiceNums = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;

for (let i = 0; i < numbers.length; ++i) {
	switch (true) {
		case numbers[i] == 0:
			zeroNumbers += 1;
			break
		case numbers[i] > 0:
			positiceNums += 1;
			break
		case numbers[i] < 0:
			negativeNumbers += 1;
			break
	}
}

console.log(`Кількість позитивних чисел: ${positiceNums}`);
console.log(`Кількість негативних чисел: ${negativeNumbers}`);
console.log(`Кількість нульових чисел: ${zeroNumbers}`);
