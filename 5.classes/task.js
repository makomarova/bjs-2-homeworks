class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	set state(currentState) {
		if (currentState < 0) {
			this._state = 0;
		} else if (currentState > 100) {
			this._state = 100;
		} else {
			this._state = currentState;
		}
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this.state * 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const foundBook = this.books.find(element => element[type] === value);
		if (!foundBook) {
			return null;
		} else {
			return foundBook;
		}
	}

	giveBookByName(bookName) {
		let foundBook = this.books.find(element => element.name === bookName);
		if (!foundBook) {
			return null;
		} else {
			let index = this.books.indexOf(foundBook);
			return (this.books.splice(index, 1))[0];
		}
	}
}

//Задача 3 Журнал успеваемости *

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = {};
	}

	addMark(mark, subject) {
		if ((mark < 2) || (mark > 5)) {
			return;
		}
		if (!(subject in this.marks)) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!(subject in this.marks)) {
			return 0;
		}
		let sum = this.marks[subject].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjectArray = Object.keys(this.marks);
		if (subjectArray.length === 0) {
			return 0;
		}
		let sum = subjectArray.reduce((accumulator, currentValue) => accumulator + this.getAverageBySubject(currentValue), 0);
		return sum / subjectArray.length;
	}
}