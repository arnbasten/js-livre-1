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

function render(isSubscribed) {
    label.innerText = isSubscribed ? "Vous êtes abonné" : "Abonnez-vous" ;

    icon.classList.toggle('fa-smile-wink', isSubscribed);
    icon.classList.toggle("happy", isSubscribed);

};

function toggleSubscribe() {
    const isSubscibed = btnButton.classList.toggle('subscribed');
    render(isSubscibed);
}

btnButton.addEventListener('click', () => {
    toggleSubscribe();
});