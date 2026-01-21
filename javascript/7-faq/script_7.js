//Je selectionne et stocke plusieurs éléments 
const questions = document.querySelectorAll('.questions');
console.log(questions);

const question = ["question 1", "question 2", "question3"];

const q1 = question[0];
console.log(q1);

//Je soumets chaque élément du tableau à la même action
questions.forEach((item) => {
    console.log(item, 'item');

    //J'affiche la réponse
    item.addEventListener('click', function() {
        console.log('item cliqué');
    const next = item.nextElementSibling;
        console.log(next);

    //Je fais apparaitre ou disparaitre la réponse
    next.classList.toggle('visible');

    //Je cible et je stocke l'icone de item (incitant à le refermer)
    const icon = item.querySelector('i');
    console.log('icon');

    //Je change l'icone
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
    });
});


