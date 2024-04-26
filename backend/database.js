const database = {
    knex: null,
};


const prepareDatabase = async () => {
    database.knex = require('knex')({
        client: 'pg',
        connection: {
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
            password: 'postgres',
            port: 5432,
        }
    });
};

database.prepareDatabase = prepareDatabase;

module.exports = database;
