function plosh4a(w, h) {
	return w * h;
}

console.log('Function Declaration:', plosh4a(4, 5));

let res = function plosh4a(w, h) {
	return w * h;
};

console.log('Function Expression:', res(4, 5));

let arrow = (w, h) => {
	return w * h;
};
console.log('Arrow Function:', arrow(4, 5));
