const header = document.querySelector('.header');
header.style.backgroundColor = '#00205b';
header.innerHTML = `<h1><a href="../index.html">FC United of Transilvania</a></h1>`;
// header.innerHTML = ``

// STICKY NAVBAR WHEN SCROLLED DOWN
window.onscroll = function() { myFunction() };
const nav = document.querySelector('.nav');
nav.style.backgroundColor = '#ffd700';

const sticky = nav.offsetTop;
myFunction = () => {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}

const main = document.querySelector('.main');
main.style.backgroundColor = '#FFFFFF';

const footer = document.querySelector('.footer');
footer.style.backgroundColor = '#ffd700';


const template = document.createElement('template');
template.innerHTML = `
<style>
    p {
        display: flex;
        color: blue;
        justify-content: center;
        font-size: 20px;
    }
    @media (max-width: 530px) {
        p {
            font-size: 13px;
        }
    }
</style>
<div class="welcome">
    <p></p>
</div>
`;

class Welcome extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('p').innerText = this.getAttribute('name');
    }
}

customElements.define('welcome-greet', Welcome);

class MainPagePhoto2 extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style> img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%; }
        </style>
        <img src=${this.getAttribute("src")}>
        `
    }
}

customElements.define('main-page-photo2', MainPagePhoto2);


// const template = document.createElement('template');
// template.innerHTML =

class SomeColumn extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(template.content.cloneNode(true));

        // this.shadowRoot.querySelector('p').innerText = this.getAttribute('name');

        this.shadowRoot.innerHTML = `
        <style> .${this.getAttribute("class")} {
          
        }

        .first-col { 
            // grid-area: firstcol;
            font-size: 15px;
            color: red;
            display: grid;
        }

        .second-col {
            // grid-area: secondcol;
            font-size: 15px;
            color: green;           
            display: grid;
        }

        .third-col {
            // grid-area: thirdcol;
            font-size: 15px;
            color: blue;
            
        }

        </style>

        <p class="first-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!</p>
        <p class="second-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!</p>
        <p class="third-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!</p>
        `
    }
}

customElements.define('some-column', SomeColumn);