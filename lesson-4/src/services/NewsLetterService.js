import { NEWS, SOURCES, API_KEY } from 'config/Endpoint';
import { handleServerError } from 'utils/errorHandler';

const DEFAULT_COUNT = 12;

class NewsLetterService {
    constructor () {
        this._apiKey = API_KEY;
        this._news = {};
    }

    getOptions () {
        const sources = `${SOURCES}${this._apiKey}`;

        return fetch(sources)
            .then(async res => {
                if (!res.ok) {
                    throw res;
                }

                const data = await res.json();
                this._options = data.sources;

                return [...this._options];
            })
            .catch(handleServerError);
    };

    getNews (source, count = DEFAULT_COUNT) {
        if (source) {
            const news = `${NEWS}sources=${source}&pageSize=${count}&${this._apiKey}`;
            const cached = this._news[source];

            if (cached && cached.length === count) {
                return cached;
            }

            return fetch(news)
                .then(async res => {
                    if (!res.ok) {
                        throw res;
                    }

                    const data = await res.json();
                    this._news[source] = data.articles;

                    return [...this._news[source]];
                })
                .catch(handleServerError);
        }
    }
}

const newsLetterService = new NewsLetterService();
export default newsLetterService;