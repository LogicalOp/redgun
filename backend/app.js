const server = require('./server');
const database = require('./database');

const prepare = async () => {
    await database.prepareDatabase();


    server.prepareServer();
};

prepare();