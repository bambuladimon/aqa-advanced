export default class Book {
	constructor(name, author, date, age) {
		this._name = name;
		this._author = author;
		this._date = date;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(name) {
		if (typeof name !== 'string' || name.trim() === '') {
			throw new Error('Поле назви має бути не порожнім рядком');
		}
		return (this._name = name);
	}

	get author() {
		return this._author;
	}

	set author(author) {
		if (typeof author !== 'string' || author.trim() === '') {
			throw new Error('Поле автор має бути не порожнім рядком');
		}
		return (this._author = author);
	}

	get date() {
		return this._date;
	}

	set date(date) {
		if (typeof date !== 'number' || date < 0) {
			throw new Error('Рік видання має бути позитивним числом');
		}
		return (this._date = date);
	}

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age !== 'string' || age.trim() === '') {
			throw new Error('Дозволений вік має бути позитивним числом');
		}
		return (this._age = age);
	}

	printInfo() {
		return `The book '${this.name}' was published in ${this.date} by author ${this.author}. 
        Book allovew for people ${this.age} age and abowe!`;
	}

	static findOldestBook(books) {
		if (!Array.isArray(books) || books.length === 0) {
			throw new Error('Потрібен непорожній масив книг');
		}
		return books.reduce((oldest, current) => (current.date < oldest.date ? current : oldest));
	}
}
