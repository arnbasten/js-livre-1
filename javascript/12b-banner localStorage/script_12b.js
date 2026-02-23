const btnSuccess = document.getElementById('btn_success');

btnSuccess.addEventListener('click', function(){
    //Je crée le local storage avec la valeur "oui"
    localStorage.setItem('banner', 'yes');

    //Je stocke la valeur de local storage
    let valeurClé = localStorage.getItem('banner');
    console.log(valeurClé, '=> valeur de la clé');

    //Je déclare la fonction
    function check(){
        console.log('déclanché');
    }

    //J'appelle la fonction
    check();
    if(valeurClé){
        console.log('le stockage existe');
    }
    else {
        console.log("le stockage n'existe pas");
    };
});
