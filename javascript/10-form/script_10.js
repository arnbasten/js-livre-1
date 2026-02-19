//Je selectionne
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//Je détecte le formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('formulaire envoyé');

    //Je récupère les valeurs de chaque input (.trim pr supprimer les espaces)
const firstnameValue = firstname.value.trim();
console.log(firstnameValue);

const nameValue = name.value.trim();
console.log(nameValue);

const emailValue = email.value.trim();
console.log(emailValue);

const messageValue = message.value.trim();
console.log(messageValue);

    //amélioration utisisateur
const msgerror = document.querySelectorAll('.error');
    //messages d'erreurs invisibles
    msgerror.forEach(error => {
       error.classList.add('invisible');
    });

const title = document.getElementById('title');

    //Je vérifie les informations de l'utilisateur
    let isValid = true
    if(firstnameValue.length < 2 || firstnameValue.length > 10) {
        console.log('erreur sur le prénon');
        isValid = false;
        firstname.nextElementSibling.classList.remove('invisible');
    }
    if(nameValue.length < 2 || nameValue.length > 15) { 
        console.log('erreur sur le nom');
        isValid = false;
        name.nextElementSibling.classList.remove('invisible');
    }
    if(messageValue.length < 10 || messageValue.length > 100) {
        console.log('erreur sur le message');
        isValid = false;
        message.nextElementSibling.classList.remove('invisible');
    }
    else {
        console.log('success')
        title.innerText = "vos informations ont bien été envoyées";
        //suppression du formulaire
        form.reset();


    };
});



