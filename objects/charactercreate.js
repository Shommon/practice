import { roll } from "./roller";
/**
 * Constructor function for creating a new Hero object.
 * 
 * @constructor
 * @param {string} name - The name of the hero.
 * @param {number} level - The level of the hero.
 * @throws {Error} Throws an error if name or level is not provided.
 */

console.log(roll("2d6"));

function Hero(name, level) {
    // Check if name and level are provided
    if (!name || !level) {
        throw new Error('Name and level are required');
    }
    this.name = name;
    this.level = level;
    this.stats = Object.assign({}, Hero.prototype.stats);
    this.calcHealth = function() {
        return 10 + Math.floor((this.stats.constitution-10)/2);
    }
    this.setHealth = function() {
        this.health = this.calcHealth();
    } 
}
// Add stats prototype to Hero
Hero.prototype.stats = {
    strength:10,
    dexterity:10,
    constitution:10,
    wisdom:10,
    intelligence:10,
    charisma:10,
};


Hero.prototype.attack = function(weapon,enemy) {
}

/**
 * Fighter constructor.
 * 
 * @constructor
 * @param {string} name - The name of the fighter.
 * @param {number} level - The level of the fighter.
 * @throws {Error} Throws an error if name or level is not provided.
 */
function Fighter(name,level) {
    // Call the Hero constructor to set up the base properties
    Hero.call(this, name, level); 
    /**
     * Set the other stat of the fighter.
     * @type {number}
     */
    this.stats.strength = 15;
    this.stats.constitution = 17;
    this.stats.dexterity = 9;
    this.setHealth();
}

/**
 * Cleric Constructor.
 * 
 * @constructor
 * @param {string} name - The name of the cleric.
 * @param {number} level - The level of the cleric.
 * @throws {Error} Throws an error if the name or level is not provided.
 */
function Cleric(name, level) {
    // Call the Hero constructor to set up the base properties
    Hero.call(this, name, level); 
    
    /**
     * Set the strength stat of the cleric.
     * @type {number}
     */
    this.stats.strength = 12;
}

Object.setPrototypeOf(Fighter.prototype, Hero.prototype);
Object.setPrototypeOf(Cleric.prototype, Hero.prototype);


const hero1 = new Fighter('Steven',10);
const hero2 = new Cleric('Tracy', 10);


export {Fighter, Cleric, hero1, hero2}; 