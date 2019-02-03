class API {
    constructor (repositoryInstance) {
        this._repo = repositoryInstance;

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
    static reject (next) {
        return (err = 'Internal error.') => next(err);
    }

    /**
     * Sends error in response if needed
     * @param error
     * @param req
     * @param res
     * @param next
     */
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

module.exports = API;
