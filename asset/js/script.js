const header = document.querySelector('.header');
header.style.backgroundColor = '#00205b';
header.innerHTML = `<h1>FC United of Transilvania</h1>`;


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

class SomeColumn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style> .${this.getAttribute("class")} {
            display: grid;
            width: auto;
            grid-template-rows: auto;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 
        }
        .first-col { 
            color: red;
            grid-area: firstcol;
        }

        .second-col {
            color: green;

        }

        </style>

        <p class="first-col">test</p>
        <p class="second-col">test</p>
        <p class="third-col">test</p>
        `
    }
}

customElements.define('some-column', SomeColumn);