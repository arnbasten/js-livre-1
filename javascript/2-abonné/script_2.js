//Je selectionne et je stocke
//icon contient le 1er élément <i> trouvé dans le code
const icon = document.querySelector('i');
console.log(icon);

//pour différencier lees chgts innerText du DOM entre icon et label
const label = document.querySelector('.label');
console.log(label);

//btnButton contient le 1er élément avec la class btn
const btnButton = document.querySelector('.subscriber-btn');
console.log(btnButton);

// je soumets l'icone à une action au clic

icon.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('icon cliquée');
    icon.classList.toggle('fa-smile-wink');
    icon.classList.toggle("happy");
});

btnButton.addEventListener('click', function(){
    console.log('bouton cliqué');
    if (label.innerText === "Abonnez-vous"){
        label.innerText = "Vous êtes abonné";}

    else {(label.innerText = "Abonnez-vous")};
});