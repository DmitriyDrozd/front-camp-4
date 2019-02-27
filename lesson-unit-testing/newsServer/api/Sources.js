const API = require('./API');

class SourcesAPI extends API {
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
        const reject = err => API.reject(next)(err);
        const resolve = sources => res.send(sources);

        this._repo.getAll(resolve, reject);
    };

    /**
     * Adds new source with id
     * @param req
     * @param res
     * @param next
     */
    post (req, res, next) {
        const { sources } = req.body;

        const reject = err => API.reject(next)(err);
        const resolve = () => res.send('Source created successfully.');

        if (sources instanceof Array) {
            for (const source of sources) {
                this._repo.create(source, resolve, reject);
            }
        } else {
            next();
        }
    }

    delete (req, res, next) {
        const { id } = req.params;

        const reject = err => API.reject(next)(err || 'No matching source found.');
        const resolve = () => res.send('Source removed successfully.');

        if (id) {
            this._repo.delete(id, resolve, reject);
        } else {
            next();
        }
    }
}

module.exports = SourcesAPI;