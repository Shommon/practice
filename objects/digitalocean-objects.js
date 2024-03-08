/**--CREATING AND OBJECT---
 * An object is a JavaScript data type, just as a number or a string is also a data type. As a data type, an object can be contained in a variable.

There are two ways to construct an object in JavaScript:
- The object literal, which uses curly brackets: {}
- The object constructor, which uses the new keyword

We can make an empty object example using both methods for demonstration purposes.
First, the object literal.
 */

// Initialize object literal with Curly Brackets
const objectLiteral = {};

// Initialize object constructor with new Object
const objectConstructor = new Object();






/**The same data was created using the object constructor method that is initialized with new Object().

Both of these approaches will create an empty object. Using object literals is the more common and preferred method, 
as it has less potential for inconsistencies and unexpected results.

We can create an example object, contained in the variable gimli, to describe a character. */

const gimli = {
    name: 'Gimli',
    race: 'Dwarf',
    weapon: 'axe',
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

/**Our new object is gimli, which has three properties. Each property consists of a name:value pair, 
 * also known as key:value pair. weapon is one of the property names, 
 * which is linked to the property value "axe", a string. It has one method, 
 * with a method name of greet and the method value consisting of the contents of the function.

Within greet, you may notice the this keyword. When using this inside of an object, 
it refers to the current object, in this case gimli.
Sending gimli to the console will print out the entire object. */

console.log(gimli);
console.log(gimli.name)


/**------- PROPERTIES AND METHODS--------
 * 
 * Objects can have properties and methods.

A property is the association between a name (key) and value within an object, 
and it can contain any datatype. A property generally refers to the characteristic of an object.

A method is a function that is the value of an object property, and therefore a task that an object can perform.

An easy way to remember the difference between object properties and methods is to think of a property as a noun, 
and a method as a verb. name, race and weapon are all nouns associated with an object, and are properties. 
fight() or talk() are verbs that might be used as a method function definition.
 */


// Accessing Object Properties

/**There are two ways to access an object’s properties.

Dot notation: .
Bracket notation: []
Let’s revisit our original example object, gimli. */


// Retrieve the value of the weapon property with dot notation .
console.log(gimli.weapon);

// Retrieve value of weapon property with bracket notation
console.log(gimli['weapon']);


/**Both dot notation and bracket notation are used regularly. 
 * Dot notation is faster and more readable, but has more limitations. 
 * Bracket notation allows access to property names stored in a variable, 
 * and must be used if an object’s property contains any sort of special character.

In order to retrieve an object method, you would call it much in the same way you would call a regular function, just attached to the object variable. */

console.log(gimli.greet())

/** ------- ADDING AND MODIFYING OBJECT PROPERTIES ------
 * 
 * In order to add a new property to an object, 
 * you would assign a new value to a property with the assignment operator (=).

For example, we can add a numerical data type to the gimli object as the new age property. 
Both the dot and bracket notation can be used to add a new object property.
 */

// Two ways to modify a property
gimli.age = 139;
gimli['age'] = 139;

console.log(gimli.age);

/** Properties can also be added as well */
gimli.height = '5 ft';
console.log(gimli.height);

//Methods can also be added this way

gimli.fight = function () {
    return `Gimli attacks with his ${this.weapon}!`
};

console.log(gimli.fight());

//Using the same method, an object's property can be modified by assigning a new value to an existing property.
gimli.weapon = "battle axe";
console.log(gimli.fight());

gimli.inventory = ['axe', 'battleaxe', 'blowdart', 'gun'];
console.log(gimli.inventory);

gimli.equipWeapon = function(weapon) {
    this.weapon = this.inventory[this.inventory.indexOf(weapon)];
    return `${this.name} has equipped his ${this.weapon}`
};

console.log(gimli.equipWeapon('gun'));
console.log(gimli.fight());


// Removing Object Properties
delete gimli.weapon;
console.log(gimli.weapon);


/** ------LOOPING THROUGH OBJECT PROPERTIES--------
 * JavaScript has a built-in type of for loop that is specifically meant for iterating over the properties of an object. 
 * This is known as the for...in loop.

 */
const legolas = {
	name: "Legolas",
	race: "Elf",
	weapon: "bow",
};

/** We can use for...in to traverse through all the properties of gimli and print them to the console. 
 * Using bracket notation, we can retrieve the property value as a variable, in this case key.
 */

for (let key in legolas) {
    console.log(legolas[key]);
};

// This takes the key of each property within legolas and returns the value paired with it, we can also 
// retrieve the key itself

for (let key in legolas) {
    console.log(key.toUpperCase() + ': ' + legolas[key]);
};

/**Another useful enumeration method is the Object.keys() method, which will return an array of the object’s keys.*/

console.log(Object.keys(legolas));
console.log(Object.values(legolas));

