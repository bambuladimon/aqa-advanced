function handleNum(num, oddNum, evenNum) { //odd - непарне, even - парне
    if (!(num%2)) {
        evenNum()
    }
    else {
        oddNum()
    }
}

function oddNum() {
    console.log('number is odd')
}

function evenNum() {
    console.log('number is even');
}

handleNum(3, oddNum, evenNum)