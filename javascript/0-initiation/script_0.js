
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

// Ajout du compteur de clics pour le client
function add() {
    compteur = compteur + 1;
    console.log(compteur, 'incrémentation de clics par une fonction');
    titre.innerText = compteur;
};

// Suppression des boutons du DOM au timeout (fin du jeu)
/*setTimeout(function () {
    //console.log("fin de chrono")
    btnRed.remove();
    btnBlue.remove();
}, 10000);*/


// TODO : modifier remove() pour garder les  boutons mais les désactiver et pouvoir recomencer une partie
