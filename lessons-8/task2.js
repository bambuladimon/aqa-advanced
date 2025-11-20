const initialtArr = [1, 2, 3, 4, 5];

let mutedArr = initialtArr.map(function mutate(num) {
	return num * initialtArr.indexOf(num);
});

console.log(mutedArr);
