import RestService from 'services/Rest.service';
import { NEWS, SOURCES, API_KEY } from 'config/Endpoint';
import { handleServerError } from 'utils/errorHandler';

const DEFAULT_COUNT = 12;

class NewsLetterService {
    constructor () {
        this._apiKey = API_KEY;
        this._news = {};

        this._handleSuccessOptions = this._handleSuccessOptions.bind(this);
        this._handleSuccessNews = this._handleSuccessNews.bind(this);
    }

    getOptions () {
        const url = `${SOURCES}${this._apiKey}`;

        return RestService.get(url, this._handleSuccessOptions, handleServerError);
    };

    getNews (source, count = DEFAULT_COUNT) {
        if (source) {
            const url = `${NEWS}sources=${source}&pageSize=${count}&${this._apiKey}`;
            const cached = this._news[source];

            if (cached && cached.length === count) {
                return cached;
            }

            return RestService.get(url, res => this._handleSuccessNews(res, source), handleServerError);
        }
    }

    async _handleSuccessOptions (res) {
        if (!res.ok) {
            throw res;
        }

        const data = await res.json();
        this._options = data.sources;

        return [...this._options];
    }

    async _handleSuccessNews (res, source) {
        if (!res.ok) {
            throw res;
        }

        const data = await res.json();
        this._news[source] = data.articles;

        return [...this._news[source]];
    }
}

const newsLetterService = new NewsLetterService();
export default newsLetterService;