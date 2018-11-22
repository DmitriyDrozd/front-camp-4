const getLi = article => {
    const li = document.createElement('li');
    li.className = 'news-list-item';
    li.innerHTML = `${article.title}`;
    return li;
};

export default class NewsList {
    constructor () {
        this.container = document.getElementById('newsList');
        this.news = [];
    }

    fill (news) {
        this.clear();
        this.news = news;

        for (const article of news) {
            const li = getLi(article);
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