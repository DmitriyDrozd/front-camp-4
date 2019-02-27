const Article = require('../model/Article');

const FIELDS = { _id: 1, title: 1, description: 1, author: 1, created: 1, content: 1, image: 1, url: 1 };
const FIELDS_PREVIEW = { _id: 1, title: 1, description: 1, author: 1, created: 1, image: 1, url: 1 };

class NewsService {
    /**
     * Returns all news
     * @param resolve
     * @param reject
     */
    getAll (resolve, reject) {
        Article.find({}, FIELDS_PREVIEW)
            .then(resolve)
            .catch(reject);
    }

    /**
     * Returns news by ID
     * @param url
     * @param resolve
     * @param reject
     */
    getOne (url, resolve, reject) {
        const URL = url;
        Article.findOne({ url: URL }, FIELDS)
            .then(resolve)
            .catch(reject);
    }

    /**
     * Creates new article
     * @param article
     * @param resolve
     * @param reject
     */
    create (article, resolve, reject) {
        Article.create(article)
            .then(resolve)
            .catch(reject);
    }

    /**
     * Updates existing article with new one
     * @param id
     * @param article
     * @param resolve
     * @param reject
     */
    update (id, article, resolve, reject) {
        Article.findOneAndUpdate({ _id: id }, article)
            .then(resolve)
            .catch(reject);
    }

    /**
     * Removes article from database
     * @param id
     * @param resolve
     * @param reject
     */
    delete (id, resolve, reject) {
        Article.findOneAndDelete({ _id: id })
            .then(resolve)
            .catch(reject);
    }
}

module.exports = NewsService;
