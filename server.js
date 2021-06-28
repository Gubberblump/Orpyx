// Express framework and body parsing middleware
const express = require('express');
const bodyParser = require('body-parser');
const db = require('node-json-db');

// Set up express instance to handle JSON data
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes')(app, db);

const server = app.listen(3000, () => {
    console.log('Listening on port %s...', server.address().port)
});
