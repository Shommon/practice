let test = (text) => alert(text + ' Fool!');

//  Write a program that takes a user’s input and prints the numbers 
//  from one to the number the user entered. However, 
//  for multiples of three print Fizz instead of the number and 
//  for the multiples of five print Buzz. 
//  For numbers which are multiples of 
//  both three and five print FizzBuzz.



// Get User Input from one number to the next number, check if second number is greater
let firstInput = document.getElementById('num1');
let secondInput = document.getElementById('num2')
let submitButton = document.getElementById('submit');

let userInput = [];

submitButton.addEventListener('click', function(){
    userInput = [];
    userInput = [parseFloat(firstInput.value),parseFloat(secondInput.value)];
    if (userInput[0] < userInput[1]){
        //pass through incrementList function
        let expandedList = incrementList(userInput[0],userInput[1]);
        let result = fizzBuzz(expandedList);
        //Return Result
        // return console.log(result);
        document.getElementById('result').innerHTML = result.toString();
    
    } else {
        //error
        alert('Incorrect Input, try again!');
        userInput = [];
    };

});

// Make a list from one number to the other number
function incrementList(a,b){
    let newList = [];
    for (let i=a; i <= b; i++) {
        newList.push(i);
    }
    return newList;
}

function fizzBuzz(array) {
    for (i in array){
        // Find multiples of 3 and 5
        if ((array[i] % 5 == 0) && array[i] % 3 == 0){
            array[i] = '<mark class="gold">FizzBuzz</mark>'
        // Find multiples of 3
        } else if (array[i] % 3 == 0){
            array[i] = '<mark class="red">Fizz</mark>'
        // Find multiples of 5
        } else if (array[i] % 5 == 0){
            array[i] = '<mark class="blue">Buzz</mark>'
        }
    }
    return array
}

// log result to console


