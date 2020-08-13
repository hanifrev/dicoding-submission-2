import "./style/style.css";

const header = document.querySelector('.header');
header.style.backgroundColor = '#00205b';
header.innerHTML = `<h1><a href="index.html">FC United of Transilvania</a></h1>`;

// STICKY NAVBAR WHEN SCROLLED DOWN, (but it's error after webpack build, i don't know why)
// window.onscroll = function() { navFunction() };

const nav = document.querySelector('.nav');
nav.style.backgroundColor = '#ffd700';

// const sticky = nav.offsetTop;
// navFunction = () => {
//     if (window.pageYOffset >= sticky) {
//         nav.classList.add("sticky")
//     } else {
//         nav.classList.remove("sticky");
//     }
// }

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
<div class="">
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
                padding: 20px;
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
          
        }

        .first-col { 
            // grid-area: firstcol;
            font-size: 16px;
            display: grid;
            text-align: center;
            margin: 20px;
            line-height: 25px;
            
        }
        
        .second-col {
            // grid-area: secondcol;
            font-size: 16px;               
            display: grid;
            text-align: justify;
            margin: 20px;
            line-height: 25px;
        }

        .third-col {
            // grid-area: thirdcol;
            font-size: 16px;         
            text-align: justify;
            margin: 20px;
            line-height: 25px;
        }

        .first-col button {
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            border-radius: 15px 15px 15px 15px;
            color: blue;
        }
        .first-col img {
            display: flex;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            padding: 20px 0px 20px 0px;
        }
        .first-col a {
            text-decoration: none;
        }
        .first-col button:hover {
            transform: scale(1.01);
            box-shadow: 0px 0px 20px 5px rgba(81,183,209,0.6);
            
        }
        .second-col:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.30)
        }
        .third-col:hover {
            transform: scale(1.05);
            box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.30)
        }

        </style>

        <p class="first-col">MEET OUR PLAYER HERE
                            <img src="https://images.daznservices.com/di/library/GOAL/e/7b/tim-persik-kediri_grhskmyguzq11l55bqrockzxp.jpg?t=-582137888&quality=100"> 
                            <button><a href="first-team.html">FCUOT First Team Players</a></button>
        </p>
        <p class="second-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!<br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!</p>
        <p class="third-col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!<br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis praesentium modi veniam aliquid. Expedita, quae eveniet dignissimos ullam iure dicta! Enim cupiditate iure voluptates odio iste numquam voluptatum consectetur odit!</p>
        `
    }
}

customElements.define('some-column', SomeColumn);

fetch("https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133609")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let hasil = data.results;
        return hasil.map(function(hasil) {
            const recentMatch = document.querySelector('.recent-match');
            recentMatch.innerHTML = `Lastest Result: ${hasil.strEvent}: ${hasil.intHomeScore} - ${hasil.intAwayScore}`
        })
    })
    .catch(error => {
        console.log(error);
    });