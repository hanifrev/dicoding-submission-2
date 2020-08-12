import players from './playerlist.js';

const gkshow = () => {

    const gk = document.createElement('p');
    const goal = players.filter(kiper => kiper.position === "Goalkeeper"); //players. TAKEN FROM ANOTHER FILE (playerlist.js)
    const newgk = document.createTextNode(goal.map(xx => `${xx.number}. ${xx.name}`).join(', '));


    gk.appendChild(newgk);
    const keeper = document.querySelector('.goalkeeper');
    keeper.appendChild(gk);

}
gkshow();

const defendershow = () => {
    const df = document.createElement('p');
    const def = players.filter(defender => defender.position === "Defender");
    const newdf = document.createTextNode(def.map(xx => `${xx.number}. ${xx.name}`).join(', '));

    df.appendChild(newdf);
    const defend = document.querySelector('.defender');
    defend.appendChild(df);
}
defendershow();

const midfieldershow = () => {
    const mf = document.createElement('p');
    const mid = players.filter(midfielder => midfielder.position === "Midfielder");
    const newmf = document.createTextNode(mid.map(xx => `${xx.number}. ${xx.name}`).join(', '));

    mf.appendChild(newmf);
    const midfield = document.querySelector('.midfielder');
    midfield.appendChild(mf);
}
midfieldershow();

const forwardshow = () => {
    const fw = document.createElement('p');
    const forw = players.filter(forward => forward.position === "Forward");
    const newfw = document.createTextNode(forw.map(xx => `${xx.number}. ${xx.name}`).join(', '));

    fw.appendChild(newfw);
    const stricker = document.querySelector('.forward');
    stricker.appendChild(fw);
}
forwardshow();




// abc.map(xx => `${xx.number} ${xx.name} <br>`);
// gk.innerHTML = player;
// gk.createElement('qwe')
// abc.map(xx => `${xx.number} ${xx.name} <br>`);
// gk.innerHTML = abc.map(xx => xx.name);