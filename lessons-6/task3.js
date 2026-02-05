function checkOrder(avail, ord) {
    let answer = '';
    if (avail < ord) {
        answer = 'Your order is too large, we don’t have enough goods.'
    } 
    else if (ord == 0) {
        answer = 'Your order is empty.'
    }
    else if (avail >= ord) {
        answer = 'Your order is accepted.'       
    }
    return answer;
}


console.log(checkOrder(5, 6))