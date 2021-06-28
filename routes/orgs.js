const orgRoutes = (app, db) => {
    const DATA_PATH = './data/orpyx-orgs.json'

    // Reader helper method
    const readFile = (callback) => {
        db.readFile(DATA_PATH, 'utf8', (err, data) => {
            callback(data)
        });
    };

    // Get all orgs
    app.get('/orgs', (req, res) => {
        readFile(data => {
            res.send(data);
        });
    });
}

module.exports = orgRoutes;