const API = require('./API');

class NewsAPI extends API {
    constructor (repositoryInstance) {
        super(repositoryInstance);
    }

    /**
     * Returns all news from collection
     * @param req
     * @param res
     * @param next
     */
    getAll (req, res, next) {
        const reject = err => NewsAPI.reject(next)(err);
        const resolve = newsArray => res.send(newsArray);

        this._repo.getAll(resolve, reject);
    };

    /**
     * Returns article with matching ID
     * @param req
     * @param res
     * @param next
     */
    getByURL (req, res, next) {
        const { url } = req.params;

        const reject = err => NewsAPI.reject(next)(err || 'No news found.');
        const resolve = news => res.send(news);

        this._repo.getOne(url, resolve, reject);
    };

    /**
     * Replaces database existing article with new one
     * @param req
     * @param res
     * @param next
     */
    put (req, res, next) {
        const { body: article, params } = req;
        const { id } = params;

        const reject = err => NewsAPI.reject(next)(err || 'No matching article found.');
        const resolve = () => res.send('Article updated successfully.');

        if (id) {
            this._repo.update(id, article, resolve, reject);
        } else {
            next();
        }
    }

    /**
     * Adds new article with id
     * @param req
     * @param res
     * @param next
     */
    post (req, res, next) {
        const { body: article, params } = req;
        const { id } = params;

        const reject = err => NewsAPI.reject(next)(err);
        const resolve = () => res.send('Article created successfully.');

        if (id) {
            this._repo.create(article, resolve, reject);
        } else {
            next();
        }
    }

    delete (req, res, next) {
        const { id } = req.params;

        const reject = err => NewsAPI.reject(next)(err || 'No matching article found.');
        const resolve = () => res.send('Article removed successfully.');

        if (id) {
            this._repo.delete(id, resolve, reject);
        } else {
            next();
        }
    }
}

module.exports = NewsAPI;