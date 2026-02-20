//Gérer la création de la tâche "create"
const form = document.getElementById('form');
console.log(form);
const todo = document.getElementById('todo');
console.log(todo);

//récupération de la valeur input
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('bouton cliqué');
    const todoValue = todo.value;
    console.log(todoValue);

    //gérer la lecture de la tâche "read"
    let item = `
                    <div class="item">
                        <p>${todoValue}</p>
                        <button class="btn-delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="btn-archive">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                `
    //selectionner et stocker list-items
    const listItems = document.querySelector('.list-items');
    console.log(listItems);

    //placer l'item dans listItems
    listItems.insertAdjacentHTML('beforeend', item);

    //selection des boutons delete
    const btnDelete = document.querySelectorAll('.btn-delete');

    //supprimer la tâche, supprimer l'élément parent
    btnDelete.forEach(i =>{
        console.log('btn-delete');

        i.addEventListener('click', function(){
            console.log('supprimer le post');
            i.parentElement.remove();
        });
    });

    //Selection des boutons archive
    const btnArchive = document.querySelectorAll('.btn-archive');

    //Rayer tache effectuée
    btnArchive.forEach(i =>{
        i.addEventListener('click', function(){
            const parent = i.parentElement;
            parent.classList.toggle('done');
        })
    });

    //réinitialiser le formulaire
    form.reset();
});
