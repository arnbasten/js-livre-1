//SELECTION ET INFOS DE BASE

//Les vignettes
const thumbnail = document.querySelectorAll('.small');
    console.log(thumbnail);

//Image grand format
const fullImg = document.getElementById('full');
    console.log(fullImg);

//Le bouton du panier et la base du panier
const btn = document.querySelector('.btn-add');

let basket = 0

const basketContainer = document.querySelector('.basket-container');

//ACTIONS

//Afficher un vignette en grand format
thumbnail.forEach((item)=>{
    console.log(item, 'selon vos désirs');

    item.addEventListener('click', function() {
        //console.log(item, 'vignette cliquée');
        let imgSource = item.getAttribute('src');
        console.log(imgSource);
        //J'attribue la nouvelle url à l'image full
        fullImg.setAttribute('src', imgSource);
    });
});

//Incrémenter le panier  par click sur bouton
btn.addEventListener('click', function() {
    console.log('bouton cliqué');
    //J'ajoute 1 au compteur
    basket = basket + 1;
        console.log(basket);
   //j'ajoute un message et le nombre d'article(s)
   if (basket < 2) {
       basketContainer.innerText = "Vous avez" + " " + basket + " " + "lot de 4 bols dans votre panier";}
   else {
       basketContainer.innerText = "Vous avez" + " " + basket + " " + "lots de 4 bols dans votre panier";}
});



 

