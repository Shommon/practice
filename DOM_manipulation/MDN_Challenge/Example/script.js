const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement('p');
para.textContent = "We hope you enjoyed the ride";

sect.appendChild(para)

const text = document.createTextNode(
    "- The premier source for web development knowledge."
);

const linkpara = document.querySelector('p');
linkpara.appendChild(text);
sect.appendChild(linkpara);
// sect.removeChild(linkpara);
// linkpara.remove();

// text.remove()
// linkpara.parentNode.removeChild(linkpara);

// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

para.setAttribute("class", "bigboy");

let toggle = 0;
function styleToggle(){
    if (toggle == 0){
        toggle = 1;
        para.setAttribute('class', 'highlight')
    } else if (toggle == 1) {
        toggle = 0;
        para.setAttribute('class', 'bigboy')
    }
}

const toggleBtn = document.querySelector('#toggle');
toggleBtn.addEventListener('click', styleToggle)