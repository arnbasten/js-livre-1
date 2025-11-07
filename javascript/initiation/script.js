console.log("tu es connecté !")
document.getElementById('titre');

let titre = document.getElementById('titre');


titre.style.color = 'green';

titre = 2;
console.log(titre);

let score = 13;
console.log(score);

score = score + 10;
console.log("après addition :", score);

//gérer les chaines de caratètres

const cours = "javascript";
console.log(cours);

const mot1 = "je ";
const mot2 = "commence ";
const mot3 = "à ";
const mot4 = "comprendre";

const phrase = mot1 + mot2 + mot3 + mot4;
console.log(phrase);

// calcul

let calcul = "0";

calcul = calcul + 2
console.log(calcul);

// Mini jeu

// je sélectionne(dans html) et je stocke (dans JS)
const btnRed = document.querySelector('.btn-red');
console.log(btnRed, "bouton rouge");
const btnBlue = document.querySelector('.btn-blue');

let compteur = 0;
console.log(compteur, 'compteur au démarage');

// je soumet s le bouton à une action
btnRed.addEventListener('click', () => {
    console.log('tu as cliqué rouge');

compteur = compteur + 1;
console.log(compteur, 'plusieurs clics rouge');

});

btnBlue.addEventListener('click', () => {
    console.log('tu as cliqué bleu');

compteur = compteur + 1;
console.log(compteur, 'plusieurs clics bleu');
});

