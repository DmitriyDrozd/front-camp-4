import NewsLetterSerice from 'services/NewsLetter.service';
import CategorySelect from 'components/CategorySelect';
import NewsList from 'components/NewsList';
import Spinner from 'components/Spinner';

class App {
    constructor () {
        this.navigationElement = document.getElementById('navigation');
        this.selectElement = document.getElementById('categorySelect');
        this.newsList = new NewsList({
            data: [],
        });
        this.categorySelect = new CategorySelect({
            events: { 'change': e => this.loadNews(e.target.value) },
            data: [],
        });

        this.prepareErrorButton();
    }

    prepareErrorButton () {
        this.errorButton = document.getElementById('showErrorButton');
        this.errorButton.classList.remove('hidden');
        this.errorButton.addEventListener('click', () => this.loadNews('random', 100000));
    }

    async init () {
        const { id: navId } = this.navigationElement;
        const spinner = new Spinner(navId);

        spinner.start();
        const options = await NewsLetterSerice.getOptions();

        if (!options) {
            this.options = [];
            throw new Error('No source selected!');
        }

        this.options = options;
        spinner.stop();
    }

    async loadNews (source, count) {
        if (!source) {
            throw new Error('No source selected!');
        }

        const spinner = new Spinner(this.newsList.id);

        spinner.start();
        this.news = await NewsLetterSerice.getNews(source, count);
        spinner.stop();
    }

    set options (data) {
        this.categorySelect.options = data;
    }

    set news (data) {
        this.newsList.news = data || [];
    }
}

export default App;