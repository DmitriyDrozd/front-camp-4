import Component from 'entities/Component.class';

export default class NewsList extends Component {
    constructor (options) {
        const { events, data } = options;

        super('#newsList', events);

        this.news = data || [];
    }

    static createNewsItem (article) {
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

            content = `
                    <div class="item-content">${linkStart}${article.title}${linkEnd}
                        <p class="description">${description}</p>
                    </div>`
        }

        li.className = `news-list-item color-${colorClass}`;
        li.innerHTML = content;

        return li;
    }

    get id () {
        return this.element.id;
    }

    set news (data) {
        if (data.length) {
            this.children = data.map(NewsList.createNewsItem);
        } else {
            this.children = [];
        }

        this.render();
    }

    get news () {
        return this.children;
    }
}