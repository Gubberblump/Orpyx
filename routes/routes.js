// This level of abstraction is overkill here, but it's cleaner
// and closer to how I would write real code
const orgRoutes = require('./orgs')

const router = (app, db) => {
    app.get('/', (req, res) => {
        res.send('Welcome to Orpyx Sample API!');
    })

    orgRoutes(app, db);
};

module.exports = router;