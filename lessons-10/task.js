import Book from './Book.js';
import EBook from './eBook.js';

let firstBook = new Book('Harry Potter', 'Joanne Rowling', 2022, 18);
let secondBook = new Book('Володар перснів', 'Джон Толкін', 2015, 12);

let newEBook = new EBook('«Кобзар»', 'Тарас Шевченко', 1995, 6, 'pdf');

console.log(firstBook.printInfo());
console.log(secondBook.printInfo());
console.log(newEBook.printInfo());

const allBooks = [firstBook, secondBook, newEBook];
const oldest = Book.findOldestBook(allBooks);

console.log(`The oldest book is  ${oldest.printInfo()}`);
