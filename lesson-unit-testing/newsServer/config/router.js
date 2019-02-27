const express = require('express');
const router = express.Router();

const NewsService = require('../business-logic/news');
const SourcesService = require('../business-logic/sources');

const NewsAPI = require('../api/News');
const SourcesAPI = require('../api/Sources');

const logger = require('../config/logger');
const {
    authenticate,
    loggedInCheck,
    registerUser,
    successRedirect,
} = require('../config/authentification');

const newsService = new NewsService();
const sourcesService = new SourcesService();

const newsApi = new NewsAPI(newsService);
const sourcesAPI = new SourcesAPI(sourcesService);

/**
 * Router API
 */
router.use('/', logger);
router.post('/login', authenticate, successRedirect);
router.post('/register', registerUser);

router.get('/sources', sourcesAPI.getAll);
router.post('/sources', sourcesAPI.post);

router.get('/news', newsApi.getAll);
router.get('/news/:url', newsApi.getByURL);
router.post('/news/:id', newsApi.post);
router.put('/news/:id', authenticate, loggedInCheck, newsApi.put);
router.delete('/news/:id', authenticate, loggedInCheck, newsApi.delete);

router.use(NewsAPI.errorHandler);
router.use('*', NewsAPI.routeNotFound);

module.exports = router;