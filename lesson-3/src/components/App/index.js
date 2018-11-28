import NewsLetter from '../../services/newsLetter';
import fillSelectElement from '../CategorySelect';
import NewsList from '../NewsList';
import Spinner from '../Spinner';

class App {
    constructor (apiKey) {
        this._newsLetterService = new NewsLetter(apiKey);
        this._newsList = new NewsList();
        this.navigationElement = document.getElementById('navigation');
        this.selectElement = document.getElementById('categorySelect');
    }

    addEventListeners () {
        this.selectElement.addEventListener('change', e => this.loadNews(e.target.value));
    }

    async init () {
        const { id: navId } = this.navigationElement;
        const spinner = new Spinner(navId);

        spinner.start();
        const options = await this._newsLetterService.getOptions();
        spinner.stop();
        fillSelectElement(this.selectElement, options);

        this.addEventListeners();
    }

    async loadNews (source) {
        if (!source) {
            throw new Error('No source selected!');
        }

        const spinner = new Spinner(this._newsList.id);

        this._newsList.clear();
        spinner.start();
        const news = await this._newsLetterService.getNews(source);
        spinner.stop();
        this._newsList.add(news);
    }
}

export default App;