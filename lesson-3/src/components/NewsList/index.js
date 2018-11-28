const getPost = article => {
    const li = document.createElement('li');
    const colorClass = Math.floor(Math.random() * (4)) + 1;

    const img = article.urlToImage
        ? `<img src="${article.urlToImage}" alt="Image for ${article.title}" class="item-image">`
        : '';
    const linkStart = `<a href=${article.url} target="_blank">`;
    const linkEnd = `</a>`;

    let content = '';

    if (img.length > 0) {
        content = `<div class="item-content with-image">${linkStart}${img}${article.title}${linkEnd}</div>`
    } else {
        const description = article.description || article.content;

        content = `<div class="item-content">${linkStart}${article.title}${linkEnd}
                <p class="description">${description}</p>
            </div>`
    }

    li.className = `news-list-item color-${colorClass}`;
    li.innerHTML = content;

    return li;
};

export default class NewsList {
    constructor () {
        this.container = document.getElementById('newsList');
        this.news = [];
    }

    add (news) {
        this.news = news;

        for (const article of news) {
            const li = getPost(article);
            this.container.appendChild(li);
        }
    }

    clear () {
        this.news = [];

        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
    }

    get id () {
        return this.container.id;
    }
}