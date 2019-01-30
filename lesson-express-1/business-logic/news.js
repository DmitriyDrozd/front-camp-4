const fs = require('fs');

class NewsBusinessLogic {
    constructor (dbPath) {
        this._dbPath = dbPath;

        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);
    }

    /**
     * Used to form error for error handling middlware
     * @param next
     * @returns {function(*=): *}
     */
    reject (next) {
        return (err = 'Internal error.') => next(err);
    }

    /**
     * Resolves with article array
     * Rejects with error
     * @param resolve
     * @param reject
     */
    getNews (resolve, reject) {
        fs.readFile(this._dbPath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            if (data) {
                try {
                    const { articles } = JSON.parse(data);

                    resolve(articles);
                } catch (e) {
                    reject(e);
                }
            }
        });
    };

    /**
     * Updates the contents of news DB.
     * @param articles
     * @param resolve
     * @param reject
     */
    updateNews (articles, resolve, reject) {
        const file = JSON.stringify({ articles }, null, 2);

        fs.writeFile(this._dbPath, file, (err) => {
            if (err) {
                reject(err);
            }

            resolve();
        });
    }

    /**
     * Router handlers
     */

    /**
     * Returns all news from collection
     * @param req
     * @param res
     * @param next
     */
    getAll (req, res, next) {
        const resolve = newsArray => res.send(newsArray);

        this.getNews(resolve, this.reject(next));
    };

    /**
     * Returns article with matching ID
     * @param req
     * @param res
     * @param next
     */
    getById (req, res, next) {
        const { id } = req.params;

        const reject = this.reject(next);
        const resolve = newsArray => {
            const news = newsArray.find(article => article.id === id);

            if (news) {
                res.send(news);
            } else {
                reject(new Error('No news found.'));
            }
        };

        this.getNews(resolve, reject);
    };

    /**
     * Replaces database existing article with new one
     * @param req
     * @param res
     * @param next
     */
    put (req, res, next) {
        const { id } = req.params;
        const body = req.body;
        const updatedArticle = {
            ...body,
            id,
        };

        const reject = this.reject(next);
        const resolve = articles => {
            const matchingArticle = articles.find(item => item.id === id);

            if (matchingArticle) {
                const index = articles.indexOf(matchingArticle);
                const updateResolve = () => {
                    res.send('Article updated successfully.');
                };

                articles[index] = updatedArticle;

                this.updateNews(articles, updateResolve, reject);
            } else {
                reject('No matching article found.');
            }
        };

        if (id) {
            this.getNews(resolve, reject);
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
        const { id } = req.params;
        const body = req.body;
        const newArticle = {
            ...body,
            id,
        };

        const reject = this.reject(next);
        const resolve = articles => {
            const isArticleExists = articles.some(article => article.id === id);

            if (isArticleExists) {
                reject('Rejected: article with same id is already exists.');
                return;
            }

            const updateResolve = () => {
                res.send('Article created successfully.');
            };

            articles.push(newArticle);

            this.updateNews(articles, updateResolve, reject);
        };

        if (id) {
            this.getNews(resolve, reject);
        } else {
            next();
        }
    }

    delete (req, res, next) {
        const { id } = req.params;

        const reject = this.reject(next);
        const resolve = articles => {
            const matchingArticle = articles.find(item => item.id === id);

            if (matchingArticle) {
                const index = articles.indexOf(matchingArticle);
                const updateResolve = () => {
                    res.send('Article removed successfully.');
                };

                articles.splice(index, 1);

                this.updateNews(articles, updateResolve, reject);
            } else {
                reject('No matching article found.');
            }
        };

        if (id) {
            this.getNews(resolve, reject);
        } else {
            next();
        }
    }

    static errorHandler (error, req, res, next) {
        if (error) {
            res.status(500).send(error);
        }

        next();
    }

    /**
     * Returns route-not-found message as server response
     * @param req
     * @param res
     */
    static routeNotFound (req, res) {
        if (!req.route) {
            res.status(404).send('Error: route not found.');
        }
    };
}

module.exports = NewsBusinessLogic;