const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');

const router = require('./config/router');

const app = express();
const PORT = 8080;

const URL = 'mongodb://localhost:27017';
const DB_NAME = 'localnews';
const CONNECT_SETTINGS = { useNewUrlParser: true };


app.use(bodyParser.json()); // parse application/json
app.use(session({ secret: 'just another secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.listen(PORT, () => {
    console.log(`Processes server listening on port ${PORT}.`);

    mongoose.connect(`${URL}/${DB_NAME}}`, CONNECT_SETTINGS);
    console.log(`Established connection to '${DB_NAME}' database.`);
});
