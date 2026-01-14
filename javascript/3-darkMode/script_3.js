//Je selectionne et je stocke
//La div switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);

//La div btn (le cercle)
const btn = document.querySelector('.btn');
console.log(btn);

//L'icone
const icon = document.querySelector('i');
console.log(icon);

//La div container
const container = document.querySelector('.container');
console.log(container);

//Le titre
const title = document.querySelector('h1');
console.log(title);


//Je soumets la div switch à une action au clic
switchBox.addEventListener('click', function() {
    console.log('div sw cliqué');

//Je déplace le cercle en utilisant btn.classList.toggle
btn.classList.toggle('btn-change'); 

//Je déplace l'icone
icon.classList.toggle('icon-change');

//Je change l'icone
icon.classList.toggle('fa-moon')
icon.classList.toggle('fa-sun');

//Je change la couleur de fond
container.classList.toggle('container-change');

//Je modifie le texte du titre
if(title.innerText === "dark mode") {
    title.innerText = "light mode";}
else {title.innerText = "dark mode";}
});



