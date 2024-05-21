const database = require('../database');
const jwt = require('jsonwebtoken');

const listUsers = () => {
    return database.knex.select('*').from('users');
}

const createUser = (user) => {
    return database.knex('users').insert({
        inumber: user.inumber,
        username: user.username,
        password: user.password,
        firstname: user.firstname,
        lastname: user.lastname,
        mobile: user.mobile,
        phone: user.phone,
        team_id: user.team_id,
        manager_id: user.manager_id,
        level: user.level,
    }).returning('*');
};

const getUser = (inumber) => {
    return database.knex('users').where({
        inumber
    }).select('*');
};

const authenticateUser = (username, password) => {
    return database.knex('users').where({
        username,
        password
    }).select('*');
};

const loginUser = (inumber, password) => {
    return authenticateUser(inumber, password).then((user) => {
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