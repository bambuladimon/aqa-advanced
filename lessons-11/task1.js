function printTextWithTimeout(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay)
}


printTextWithTimeout('My name is Dima!', 5000)