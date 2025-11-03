let car1 = {
    brand: 'Ford',
    model: 'EDGE',
    year: 2017
}

let car2 = {
    brand: 'Audi',
    model: 'a6',
    owner: 2015
}

let car3 = {...car1, ...car2}

console.log(car3);
