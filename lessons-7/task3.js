function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Помилка: обидва аргументи мають бути числами.');
	}

	if (denominator === 0) {
		throw new Error('Помилка: ділення на нуль неможливе.');
	}

	return numerator / denominator;
}

try {
	console.log('Результат:', divide(10, 2));
} catch (error) {
	console.error(error.message);
} finally {
	console.log('Робота завершена');
}

try {
	console.log('Результат:', divide(15, 0));
} catch (error) {
	console.error(error.message);
} finally {
	console.log('Робота завершена');
}

try {
	console.log('Результат:', divide('10', 2));
} catch (error) {
	console.error(error.message);
} finally {
	console.log('Робота завершена');
}
