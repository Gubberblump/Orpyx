const orgRoutes = (app, db) => {
    const DATA_PATH = './data/orpyx-orgs.json'

    app.get('/orgs', (req, res) => {
        db.readFile(DATA_PATH, 'utf8', (err, data) => {
            res.send(data)
        })
    })
}

module.exports = orgRoutes;