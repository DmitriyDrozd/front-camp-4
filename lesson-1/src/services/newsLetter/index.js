import { NEWS, SOURCES } from '../../config/Endpoint';

const DEFAULT_COUNT = 10;

class NewsLetter {
    constructor (apiKey) {
        this._apiKey = apiKey;
        this._news = {};
    }

    getOptions () {
        const sources = `${SOURCES}${this._apiKey}`;

        return new Promise (resolve => fetch(sources)
            .then(sourcesList => {
                return sourcesList.json()
            })
            .then(res => {
                this.options = res.sources;
                resolve([...this.options]);
            }));
    };

    getNews (source, count = DEFAULT_COUNT) {
        if (source) {
            const news = `${NEWS}sources=${source}&pageSize=${count}&${this._apiKey}`;
            const cached = this._news[source];

            if (cached && cached.length === count) {
                return cached;
            }

            return new Promise (resolve => fetch(news)
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    this._news[source] = res.articles;
                    resolve([...this._news[source]]);
                }));
        }
    }
}

export default NewsLetter;