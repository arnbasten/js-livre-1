//J'affiche une notification au click
//Je selectionne et je stocke le bouton
const btn = document.querySelector('.btn');
console.log('btn');

//Je selectionne et je stocke la div container-notifications
const cnotif = document.querySelector('.container-notifications');
console.log(cnotif);

//Je détecte le click sur le bouton
btn.addEventListener('click', function() {
    console.log('bouton cliquée');
    //Je crée un élément dans notif
    const notification = document.createElement('div');
    console.log(notification);

    //Je donne un style à la div
    notification.classList.add('toast');

    //Je nomme la notification
    notification.textContent = "votre fichier est bien enregistré"

    //J'accroche notification à l'élément cnotif
    cnotif.appendChild(notification);

    //A la fin du chrono, la notification est supprimée
    setTimeout(function() {
        notification.remove();
    }, 5000);
})


