const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json(),
    ),
    defaultMeta: { type: 'request' },
    transports: [
        new transports.File({ filename: 'requests.log' })
    ]
});

/**
 * Logs any request url and date.
 * @param req
 * @param res
 * @param next
 */
const logHandler = (req, res, next) => {
    const { url } = req;

    logger.info(url);
    next();
};

module.exports = logHandler;