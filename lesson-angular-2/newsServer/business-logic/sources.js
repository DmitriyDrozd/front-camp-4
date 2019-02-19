const Source = require('../model/Source');

const FIELDS = { _id: 0, id: 1, name: 1, url: 1 };

class NewsService {
    /**
     * Returns all news
     * @param resolve
     * @param reject
     */
    getAll (resolve, reject) {
        Source.find({}, FIELDS)
            .then(resolve)
            .catch(reject);
    }

    /**
     * Creates new Source
     * @param source
     * @param resolve
     * @param reject
     */
    create (source, resolve, reject) {
        Source.create(source)
            .then(resolve)
            .catch(reject);
    }

    /**
     * Removes source from database
     * @param id
     * @param resolve
     * @param reject
     */
    delete (id, resolve, reject) {
        Source.findOneAndDelete({ _id: id })
            .then(resolve)
            .catch(reject);
    }
}

module.exports = NewsService;
