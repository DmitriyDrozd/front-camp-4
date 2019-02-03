const express = require('express');
const bodyParser = require('body-parser');

const router = require('./config/router');

const app = express();
const PORT = 8080;

app.use(bodyParser.json()); // parse application/json
app.use(router);

app.listen(PORT, () => {
    console.log(`Processes server listening on port ${PORT}.`);
});
