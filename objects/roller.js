/**
 * Rolls dice based on the given dice notation.
 *
 * @param {string} dice - The dice notation in the format {repetition}d{dicetype}
 * @throws {Error} Throws an error if the dice notation is invalid.
 * @return {Array} An array of rolled numbers.
 */
export function roll(dice) {
    // Regular expression to match the dice notation
    const match = dice.match(/^(\d+)[dD](\d+)$/);
    
    // If the dice notation is valid
    if (match) {
        // Extract repetition and dicetype from the match
        let firstNumber = parseInt(match[1]);
        let lastNumber = parseInt(match[2]);
        let sum = [];

        // Roll the dice for the given number of times
        for (let i = 0; i < firstNumber; i++) {
            // Generate a random number between 1 and lastNumber (inclusive)
            sum.push(Math.floor(Math.random() * lastNumber) + 1);
        }
        
        // Return the array of rolled numbers
        return sum;
    } else {
        // Throw an error if the dice notation is invalid
        throw new Error('Invalid dice notation');
    }
}

