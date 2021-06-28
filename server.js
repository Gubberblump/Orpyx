// Express framework, body parsing middleware, and routes
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

// Set up express instance to handle JSON data
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3000, () => {
    console.log('Listening on port %s...', server.address().port)
});
