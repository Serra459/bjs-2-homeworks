class PrintEditionItem{
	constructor(name, releaseDate, pagesCount){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

    fix() {
        this.state *= 1.5;
    }

    set state(num){
        if(num < 0){
            this._state = 0;
        }
        else if(num > 100){
            this._state = 100;
        }
        else {
            this._state = num; 
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
        this.type = "magazine";
	}
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
		super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
	}
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
        this.type = "novel";
	}
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
	}
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
		super(author, name, releaseDate, pagesCount);
        this.type = "detective";
	}
}

class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i][type] == value){
                return this.books[i]
            }
        }

        return null;
    }

    giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){
            if(this.books[i].name == bookName){
                let foundedBook = this.books[i];
                this.books.splice(i, 1);
                return foundedBook;
            }
        }

        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1919, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1919).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
const givenBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

givenBook.state = 25;
givenBook.fix();
library.addBook(givenBook);