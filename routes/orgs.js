// In a real imlementation the router should not know about the DB
// but proper structure would be outside the scope of this example
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

            // Pushes a new org into the array
            // Specs specify that only the orgCode and name should be given
            const { orgCode, name } = req.body;
            const newOrg = {
                orgCode,
                name,
                creationDate,
            };
            data.organizations.push(newOrg);

            writeFile(JSON.stringify(data), () => {
                res.status(200).send('Created new org');
            });
        });
    });

    // Update org
    app.put('/orgs/:id', (req, res) => {
        readFile(data => {
            const orgCode = req.params['id'];

            // Get the index of the matching org and update it
            const { organizations } = data
            const index = organizations.findIndex(x => x.orgCode === orgCode);
            // Specs specify that only the orgCode and name should be given
            const { name } = req.body;
            const updatedOrg = {
                orgCode,
                name
            }
            organizations[index] = updatedOrg;

            writeFile(JSON.stringify(data), () => {
                res.status(200).send(`Org ${orgCode} has been updated`);
            })
        })
    })
}

module.exports = orgRoutes;