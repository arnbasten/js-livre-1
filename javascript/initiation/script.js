
// Mini jeu
let titre = document.getElementById('titre');
console.log("tu es connecté !")


// je sélectionne(dans html) et je stocke (dans JS)

const btnRed = document.querySelector('.btn-red');
const btnBlue = document.querySelector('.btn-blue');

let compteur = 0;
console.log(compteur, 'compteur au démarage');

// je soumets le bouton à une action
btnRed.addEventListener('click', () => {
    console.log('tu as cliqué rouge');
    add();
});

btnBlue.addEventListener('click', () => {
    console.log('tu as cliqué bleu');
    add();
});

function add() {
    compteur = compteur + 1;
    console.log(compteur, 'incrémentation de clics par une fonction');
    titre.innerText = compteur;
};

