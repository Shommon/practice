let input = document.querySelector('#item');
const cartItems = document.querySelector('#cartItems');
const btn = document.querySelector('#addItem');

btn.addEventListener('click',addItem);

function addItem(){
    let searched = input.value; // Sets searched from input
    console.log(searched)
    input.value = '' //Empties input box\
    const itemText = document.createElement('li');
    const btnDelete = document.createElement('button')
    const span = document.createElement('span')

    itemText.appendChild(span);
    itemText.appendChild(btnDelete);

    span.textContent = searched;
    btnDelete.textContent = 'Delete'

    cartItems.appendChild(itemText);

    btnDelete.addEventListener('click', () => {
    cartItems.removeChild(itemText);
    })
    input.focus()
}


