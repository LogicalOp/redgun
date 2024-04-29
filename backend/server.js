const express = require('express');
const cors = require('cors');

const routes = require('./api/routes');

const prepareServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use('/', routes);
    
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });

    return app;
}

module.exports = {
    prepareServer
};