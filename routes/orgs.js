const orgRoutes = (app, db) => {
    const DATA_PATH = './data/orpyx-orgs.json'

    // Reader helper method
    const readFile = (callback) => {
        db.readFile(DATA_PATH, 'utf8', (err, data) => {
            callback(JSON.parse(data))
        });
    };

    // Writer helper method
    const writeFile = (data, callback) => {
        db.writeFile(DATA_PATH, data, 'utf8', err => {
            callback()
        })
    }

    // Get all orgs
    app.get('/orgs', (req, res) => {
        readFile(data => {
            res.send(data);
        });
    });

    // Create new org
    app.post('/orgs', (req, res) => {
        readFile(data => {
            const creationDate = new Date();

            const newOrg = {
                ...req.body,
                creationDate,
            };
            data.organizations.push(newOrg);

            writeFile(JSON.stringify(data), () => {
                res.status(200).send('Created new org');
            });
        });
    });
}

module.exports = orgRoutes;