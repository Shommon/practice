// Object Constructors
/**
 * When you have a specific type of object that you need to duplicate 
 * like our player or inventory items, a better way to create them is using an object constructor, 
 * which is a function that looks like this:
 */

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player = new Player('Steven', 'overworld');
console.log(player.name, player.marker);


/**
 * You can even add functions within the objects using Object Literal Method
 */

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = () => {
        console.log(this.name)
    }
}

const player1 = new Player('Steven', 'overworld');
const player2 = new Player('Tracy', 'nether');
player1.sayName();
player2.sayName();


/**Exercise
 * Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
 * Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.
 * Put a function into the constructor that can report the book info like so: 
 * @param theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
*/

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = () => {
        return title + ' by ' + author + ', ' + pages + ' pages' + ', ' + readStatus;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
console.log(theHobbit.info());