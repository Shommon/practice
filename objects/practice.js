// Object Constructors
/**
 * When you have a specific type of object that you need to duplicate 
 * like our player or inventory items, a better way to create them is using an object constructor, 
 * which is a function that looks like this:
 */

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// const player = new Player('Steven', 'overworld');
// console.log(player.name, player.marker);


/**
 * You can even add functions within the objects using Object Literal Method
 */

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = () => {
//         console.log(this.name)
//     }
// }

// const player1 = new Player('Steven', 'overworld');
// const player2 = new Player('Tracy', 'nether');
// player1.sayName();
// player2.sayName();


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

/**The prototype
Before we go much further, there’s something important you need to understand about JavaScript objects. 
All objects in JavaScript have a prototype. The prototype is another object that the original object inherits from, 
which is to say, the original object has access to all of its prototype’s methods and properties.

Let’s break it down.

1. All objects in JavaScript have a prototype
Pretty straightforward sentence here! Every object in JavaScript has a prototype. So for example, 
the player1 and player2 objects from before, (created with the Player(name, marker) object constructor) 
also have a prototype. Now, what does having a prototype mean? What even is a prototype of an object?

2. The prototype is another object
This sentence also seems pretty straightforward! The prototype is just another object - again, 
like the player1 and the player2 objects. The prototype object can have properties and functions, 
just as these Player objects have properties like .name, .marker, and functions like .sayName() attached to them.

3. …that the original object inherits from, and has access to all of its prototype’s methods and properties
Here, the “original object” refers to an object like player1 or player2. These objects are said to “inherit”, 
or in other words, these objects have access to the prototype’s properties or functions, 
if they have been defined. For example, if there was a .sayHello() function defined on the prototype, 
player1 can access the function just as if it was its own function - player1.sayHello(). 
But it’s not just player1 who can call the .sayHello() function, even player2 can call it, since it’s defined on the prototype! 
Read on to know the details of how it works and how you could do this yourself! */

// Player.prototype.sayHello = () => {
//     console.log('hello, i am a player!');
// };

// player1.sayHello();
// player2.sayHello();


/**Prototypal inheritance
Now, you may also have a question - what use is an object’s prototype? 
What is the purpose of defining properties and functions on the prototype?

We can narrow it down to two reasons:

We can define properties and functions common among all objects on the prototype to save memory. 
Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, 
and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.
The second reason is the name of this section, Prototypal Inheritance, which we’ve referred to in passing earlier, 
in the introduction to the Prototype. In recap, we can say that the player1 and player2 objects inherit from the Player.prototype object, 
which allows them to access functions like .sayHello. */

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function () {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype); //Player prototype inherits from Person Prototype
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('steve', 'X');
const player2 = new Player('tracy', 'O');


player1.sayName()
player1.getMarker();


player2.sayName();
player2.getMarker();