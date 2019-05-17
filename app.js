const apiKey= '=de48ad148e3b4052a0e79ee1bc96dcf8'; 
const main = document.querySelector('main');  
window.addEventListener('load', e => {
updateNews();
});

async function updateNews() {
    const res = await fetch ('https://newsapi.org/v2/sources=?&apiKey=de48ad148e3b4052a0e79ee1bc96dcf8');
    const json = await res.json();

    main.innerHTML = json.sources.map(createSource).join('\n');
     
}

function createSource(source){
    return `
        <div class='source'>
            <a href = '${source.url}'>
                <h2>'${source.name}'</h2>
                <p>${source.description}</p>
            </a>
        </div>
    `; 
}
