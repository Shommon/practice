/**JavaScript Prototypes
In Understanding Objects in JavaScript, we went over the object data type, 
how to create an object, and how to access and modify object properties. 
Now we will learn how prototypes can be used to extend objects.

Every object in JavaScript has an internal property called [[Prototype]]. 
We can demonstrate this by creating a new, empty object. */

let x = {};
// OR
// let x = new Object();

/** -------Prototype Inheritance -------------
When you attempt to access a property or method of an object, JavaScript will first search on the object itself, 
and if it is not found, it will search the object’s [[Prototype]]. 
If after consulting both the object and its [[Prototype]] still no match is found, 
JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.

At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. 
Any attempt to search beyond the end of the chain results in null.

In our example, x is an empty object that inherits from Object. 
x can use any property or method that Object has, such as toString(). */

console.log(x.toString());



/**Let’s look at another type of object. If you have experience Working with Arrays in JavaScript, 
 * you know they have many built-in methods, such as pop() and push(). 
 * The reason you have access to these methods when you create a new array is 
 * because any array you create has access to the properties and methods on the Array.prototype.

We can test this by creating a new array. */

let y = [];
console.log(Object.getPrototypeOf(y));
console.log(y.__proto__.__proto__);
console.log(Object.prototype);

// the prototype of y has a prototype that inherits from Object



/** ------CONSTRUCTOR FUNCTIONS ------------ */
/** Constructor functions are functions that are used to construct new objects. 
 * The new operator is used to create new instances based off a constructor function. 
 * We have seen some built-in JavaScript constructors, such as new Array() and new Date(), 
 * but we can also create our own custom templates from which to build new objects.

As an example, let’s say we are creating a very simple, text-based role-playing game. 
A user can select a character and then choose what character class they will have, such as warrior, healer, thief, and so on.

Since each character will share many characteristics, such as having a name, a level, and hit points,
it makes sense to create a constructor as a template. However, since each character class 
may have vastly different abilities, we want to make sure each character only has access to their own abilities. 
Let’s take a look at how we can accomplish this with prototype inheritance and constructors.

To begin, a constructor function is just a regular function. 
It becomes a constructor when it is called on by an instance with the new keyword. 
In JavaScript, we capitalize the first letter of a constructor function by convention. */

function Hero(name, level) {
    this.name = name;
    this.level = level;
}

/** We have created a constructor function called Hero with two parameters: name and level. 
 * Since every character will have a name and a level, 
 * it makes sense for each new character to have these properties. 
 * The this keyword will refer to the new instance that is created, 
 * so setting this.name to the name parameter ensures the new object will have a name property set.

Now we can create a new instance with new. */

let hero = new Hero('Steven', 1);
console.log(hero);

/** Now if we get the [[Prototype]] of hero1, we will be able to see the constructor as Hero(). 
 * (Remember, this has the same input as hero1.__proto__, but is the proper method to use.) */
console.log(Object.getPrototypeOf(hero))

/**You may notice that we’ve only defined properties and not methods in the 
 * constructor. It is a common practice in JavaScript to define methods on the 
 * prototype for increased efficiency and code readability.

We can add a method to Hero using prototype. We’ll create a greet() method. */

Hero.prototype.greet = function() {
    return `${this.name} says hello!`;
}
console.log(hero.greet());
console.log(Object.getPrototypeOf(hero))

/**If you inspect the [[Prototype]] of Hero, you will see greet() 
 * as an available option now.

This is good, but now we want to create character classes for the heroes to use. 
It wouldn’t make sense to put all the abilities for every class 
into the Hero constructor, because different classes will have different abilities. 
We want to create new constructor functions, but we also want them to be connected 
to the original Hero.

We can use the call() method to copy over properties from one constructor 
into another constructor. Let’s create a Warrior and a Healer constructor. */

// Initialize Warrior Constructor
function Warrior(name, level, weapon) {
    //Chain constructor with call
    Hero.call(this, name, level); //
    //add new property
    this.weapon = weapon;
}

// Initalize Healer Constructor
function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
} 

/**Both new constructors now have the properties of Hero and a few unqiue ones. 
 * We’ll add the attack() method to Warrior, and the heal() method to Healer. */

Warrior.prototype.attack = function() {
    return `${this.name} attacks using their ${this.weapon}`
}
Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}.`
}

const hero1 = new Warrior('Steven', 5, 'Longsword');
const hero2 = new Healer('Tracy', 10, 'cure');


//But what happens if we try to use methods further down the prototype chain?

hero1.greet(); //Uncaught TypeError: hero1.greet is not a function



/**Prototype properties and methods are not automatically linked when you use call() 
 * to chain constructors. We will use Object.setPropertyOf()
 * to link the properties in the Hero constructor to the Warrior and Healer 
 * constructors, making sure to put it before any additional methods.
 */

