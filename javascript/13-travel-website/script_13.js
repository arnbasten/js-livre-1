//récup du formulaire
const form = document.getElementById('form');

//récup des champs select et input type=date
const country = document.getElementById('country');
const start = document.getElementById('start');
const end = document.getElementById('end');
const listResults = document.querySelector('.result-list');

//activer le formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('formulaire validé');

//stocker les coix utilisateur dans l'objet "choix"
const choix = {
    country : country.value,
    start : start.value,
    end : end.value
};
console.log(choix, 'choix du formulaire');

//transformer l'objet
const choixSring = JSON.stringify(choix);
    console.log(choixSring);

    //placer l'objet dans dans le local storage
    localStorage.setItem('details', choixSring);
    //rafraichir la page pour faire apparaitre les informations
    window.location.href = window.location.href; 
});

const travels = [
    {
        pays : "hawai",
        prix : 1140,
        voyageurs : 2
    },
    {
        pays : "maldive",
        prix : 700,
        voyageurs : 2
    },
    {
        pays : "borabora",
        prix : 1600,
        voyageurs : 2
    },
    {
        pays : "tahiti",
        prix : 1200,
        voyageurs : 2
    },
    {
        pays : "bahamas",
        prix : 1020,
        voyageurs : 2
    },
]

console.log(travels);



function displayDetails(){
    console.log('fonction déclanchée');
    //récup fu stockage local
    const choixObjet = JSON.parse(localStorage.getItem('details'));
    if (!choixObjet) return;
    console.log(choixObjet, "choix Objet"); 
    //pré-rempir les champs
    country.value = choixObjet.country;
    start.value = choixObjet.start;
    end.value = choixObjet.end;

    const results = travels.filter((travel) =>
                        travel.pays === country.value
                    );

console.log(results, "résultats");
listResults.innerHTML = "";

//faire une boucle dans le tableau
results.forEach(result =>{
    console.log(result, "résultat");

//créer une div avec les valeurs à l'intérieur
    const item = `
                    <div class="item">
                    <p class="item-country">
                        ${result.pays}
                    </p>
                    <p>
                        Offre pour ${result.voyageurs} personnes
                    </p>
                    <p>prix de vol inclus ${result.prix} €
                    </p>
                    <button>Go !</button>
                    </div>
                `;    
                //placer la div dans la page 
                listResults.innerHTML += item;
    });
};
displayDetails();




