function getNum(num) {
	console.log(num);
	while (num > 0) {
		return getNum(num - 1);
	}
}

getNum(5);
