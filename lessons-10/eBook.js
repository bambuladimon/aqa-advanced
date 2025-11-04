import Book from './Book.js';

export default class EBook extends Book{
    constructor(name, author, date, age, fileFormat) {
        super(name, author, date, age);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        return this._fileFormat = fileFormat;
    }

    printInfo() {
        return `The book '${this.name}' was published in ${this.date} by author ${this.author}. 
        Book allovew for people ${this.age} age and abowe!
        You can download our file in ${this.fileFormat} format`
    }

    static fromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}