let averageGrade = 85;
let result;

if (averageGrade < 60) {
	result = 'Незадовільно';
} else if (averageGrade >= 60 && averageGrade <= 70) {
	result = 'Задовільно';
} else if (averageGrade >= 71 && averageGrade <= 80) {
	result = 'Добре';
} else if (averageGrade >= 81 && averageGrade <= 90) {
	result = 'Дуже добре';
} else if (averageGrade >= 91 && averageGrade <= 100) {
	result = 'Відмінно';
} else {
	result = 'Некоректне значення оцінки';
}

console.log('Середня оцінка:', averageGrade);
console.log('Рівень успішності:', result);
