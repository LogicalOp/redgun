const database = require('../database');
const jwt = require('jsonwebtoken');

const listUsers = () => {
    return database.knex.select('*').from('users');
}

const createUser = (user) => {
    return database.knex('users').insert({
        id: user.id,
        username: user.username,
        password: user.password
    }).returning('*');
};

const getUser = (id) => {
    return database.knex('users').where({
        id
    }).select('*');
};

const authenticateUser = (username, password) => {
    return database.knex('users').where({
        username,
        password
    }).select('*');
};

const loginUser = (username, password) => {
    return authenticateUser(username, password).then((user) => {
        if (user.length === 0) {
            throw new Error('Invalid username or password');
        }

        const token = jwt.sign({ id: user[0].id }, 'innovation', { expiresIn: '7d' });
        return { token };
    });
};

module.exports = {
    listUsers,
    createUser,
    loginUser,
    getUser
};