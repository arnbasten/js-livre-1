/*Je selectionne et je stocke*/
//l'icone burger
const icon = document.querySelector('.navbar-mobile i');
console.log(icon);

//div modal
const modal = document.querySelector('.modal');
console.log(modal);

//je soumets l'icone à une action
icon.addEventListener('click', function() {
    console.log('icone cliquée');
    modal.classList.toggle('change-modal');
    icon.classList.toggle('fa-times');
});
