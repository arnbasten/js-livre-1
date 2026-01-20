//Je selectionne et je stocke la div modal-container
const modal = document.querySelector('.modal-container');
console.log(modal);

//Je selectionne le bouton
const btn = document.querySelector('.btn-success');
console.log(btn);

//Je selectionne le code
const code = document.querySelector('.code');
console.log(code);

//Je selectionne l'icone
const icon = document.querySelector('.fas.fa-times');
console.log(icon);

//Je détecte le dédilement
window.addEventListener('scroll',  displayModal)
function displayModal() {
    console.log('défilement détecté');
    
    //détecter le nombre de scroll depuis le haut
    let height = document.documentElement.scrollTop;
        console.log('nb de px depuis le haut de la page');
    if(height > 400) {
        console.log('affiche la modal');
        modal.style.display = "flex"
    };
};

btn.addEventListener('click', function() {
    console.log('bouton cliqué');

    //Je rends le code visible
    code.style.display = "block";

    //Je rends insisible le bouton
    btn.style.display = "none";
});

//Je fais disparaitre la fenêtre modal au click sur l'icone
icon.addEventListener('click', function() {
    console.log('icone cliquée');
    //Je rends invisible la div modal-container
    modal.style.display = 'none';
    //J'annule l'évènement
    window.removeEventListenerEventListener('scroll',  displayModal)
});



