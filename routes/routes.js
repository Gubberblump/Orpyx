const orgRoutes = require('./orgs')

const router = (app, db) => {
    app.get('/', (req, res) => {
        res.send('Welcome to Orpyx Sample API!');
    })

    orgRoutes(app, db);
};

module.exports = router;