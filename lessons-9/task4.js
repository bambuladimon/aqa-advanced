let person = {
	firstName: 'Dmytro',
	lastName: 'Kulikovskyi',
	age: 30,
};

person.email = 'bambula.dimon@gmail.com';
delete person.age;

console.log(person);
