<<<<<<< HEAD
// container object
const container = document.querySelector("#container");

// content element
const content = document.createElement('div');
content.classList.add('content')
content.textContent = 'This is my content'

// par1 element
const par1 = document.createElement('p');
par1.textContent = "Hey I'm red!"
par1.style['color'] = 'red';

// head3 element
const head3 = document.createElement('h3');
head3.textContent = "I'm a blue h3!"
head3.style['color'] = 'blue';

// border element
const border = document.createElement('div');
border.style.cssText = 'border: 2px solid black; background-color: pink; display: flex; flex-direction: column; align-items: center; margin-bottom: 20px'

// h1 child => border
const head1 = document.createElement('h1');
head1.textContent = "I'm in a div";

// par2 child => border
const par2 = document.createElement('p');
par2.textContent = "ME TOO!";

// btn Alert
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('You Clicked Me!')
});

// btn2 Alert
function alertFunction(){
    alert('YOU CLICKED ME BABY!');
}
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', alertFunction) // btn2.addEventListener('click', alertFunction()) adding the () to the alertFunction method seems to automatically call the function

// btn3 event listen
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', (e) => {
    console.log(e);
})

//Append Child
container.appendChild(content);
container.appendChild(par1);
container.appendChild(head3);
container.appendChild(border)

border.appendChild(head1);
border.appendChild(par2)
=======
const container = document.querySelector('#container');

const content = document.createElement('div'); //Creates a div element
content.classList.add('content'); // Adds class "content" to content
content.textContent='Hello World!'


const par = document.createElement('p');
par.textContent = "Hey I'm red!";
par.style.color = 'red';

const head3 = document.createElement('h3');
head3.textContent = "I'm a blue h3!"
head3.style.cssText = 'color: blue'

const contentBorder = document.createElement('div');
contentBorder.classList.add('border')
contentBorder.style.cssText = 'border: 2px solid black; background-color: pink'

const head1 = document.createElement('h1');
head1.textContent ="I'm in a div!"

const par2 = document.createElement('p');
par2.textContent = 'ME TOO!'


// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World!');

// function alertFunction() {
//     alert("YEAAAAH BABBBYY!")
// }

// const btn2 = document.querySelector('#btn2');
// btn2.addEventListener('click', alertFunction);

// const btn3 = document.querySelector("#event");
// btn3.addEventListener('click', function(e){
//     console.log(e);
//     e.target.style.background = 'yellow'
// });


// Container 2
const container2 = document.querySelector('#container2')
const buttons = document.querySelectorAll('button')

console.log(buttons)

buttons.forEach((button => {
    // console.log(button);
    button.addEventListener('click', ()=> {
        alert("I am Button #"+button.id)
    })
}))


// Children of Content Border
contentBorder.appendChild(head1);
contentBorder.appendChild(par2)
// Children of Container
container.appendChild(par);
container.appendChild(head3);
container.appendChild(content);
container.appendChild(contentBorder);

>>>>>>> 8587b694e957dfa2cb9d332efbdd28d362472ae1
