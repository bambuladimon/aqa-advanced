function checkOrder(avail, ord) {
	if (avail < ord) {
		console.log('Your order is too large, we don’t have enough goods.');
	} else if (ord == 0) {
		console.log('Your order is empty.');
	} else if (avail >= ord) {
		console.log('Your order is accepted.');
	}
}

console.log(checkOrder(5, 0));
