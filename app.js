const apiKey= '=de48ad148e3b4052a0e79ee1bc96dcf8'; 
const main = document.querySelector('main');  
window.addEventListener('load', e => {
updateNews();
});

async function updateNews() {
    const res = await fetch ('https://newsapi.org/v1/articles?sources=techcrunch&apiKey=de48ad148e3b4052a0e79ee1bc96dcf8');
    const json = await res.json();

    main.innerHTML = json.articles.map(createArticle).join('\n');
     
}

function createArticle(article){
    return `
        <div class='article'>
            <a href = '${article.url}'>
                <h2>'${artcle.title}'</h2>
                <img src = '${article.urlToImage}'>
                <p>${article.description}</p>
            </a>
        </div>
    `; 
}
