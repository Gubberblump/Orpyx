// Express framework and body parsing middleware
const express = require('express');
const bodyParser = require('body-parser');
const jsonDb = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

// Set up express instance to handle JSON data
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new jsonDb(new Config('./data/orpyx-orgs'));
const routes = require('./routes/routes')(app, db);

const server = app.listen(3000, () => {
    console.log('Listening on port %s...', server.address().port)
});
