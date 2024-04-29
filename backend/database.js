const database = {
    knex: null,
};

const prepareDatabase = async () => {
    database.knex = require('knex')({
        client: 'pg',
        connection: {
            user: 'postgres',
            host: 'localhost',
            database: 'innovation',
            password: 'I<3SAPHANA',
            port: 5432,
        }
    });
};

database.prepareDatabase = prepareDatabase;

module.exports = database;
