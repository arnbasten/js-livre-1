//Je selectionne
const postsContainer = document.querySelector('.posts');
console.log(postsContainer);

//Les objets
const utilisateur = {
    name : "Martin",
    firstname : "Pierre",
    service : "marcketing"
}

const post = {
    title : "SEO, les bonnes pratiques",
    hastag : "#SEO",
    extract : "lorem ipsum"
}

//J'accède à la valeur de la propriété titre
const t = post.title;
console.log(t);

//Les tableaux - array
const posts = [{
    title : "SEO, les bonnes pratiques",
    hashtag : "#SEO",
    extract : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis, asperiores repellat dolores dolore veniam. Sit voluptatibus placeat cum nesciunt laborum amet deserunt, temporibus rerum saepe optio omnis illum veniam?"
},
{
    title : "Bien débuter en référencement payant",
    hashtag : "#référencement",
    extract : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium nam distinctio, molestiae, placeat sint eligendi debitis maiores voluptatem quasi quo sit suscipit aperiam quia tempora et eaque perspiciatis iusto assumenda eos"
},
{
    title : "Content marcketing, les bons arguments",
    hashtag : "#contentmarcketing",
    extract : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus molestiae iure ipsa necessitatibus magnam ipsam repellendus pariatur, sequi illum!"
}]
console.log(posts);

//Je passe en revue chaqyue élément du tableau
posts.forEach(item => {
    const article = document.createElement('div');
    article.classList.add('post');

    article.innerHTML = `
                        <h2>${item.title}</h2>
                        <p>${item.extract}</p>
                        <span>${item.hashtag}</span>
                        `;
    postsContainer.appendChild(article);
});

