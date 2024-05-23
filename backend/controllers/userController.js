const database = require('../database');
const jwt = require('jsonwebtoken');

const listUsers = async () => {
    try {
        return await database.knex.select('*').from('users');
    } catch (error) {
        console.error(`Error listing users: ${error.message}`);
        throw error;
    }
};

const createUser = async (user) => {
    try {
        return await database.knex('users').insert({
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
    } catch (error) {
        console.error(`Error creating user: ${error.message}`);
        throw error;
    }
};

const getUser = async (inumber) => {
    try {
        const user = await database.knex('users').where({ inumber }).select('*');
        if(user.length == 0) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error(`Error getting user: ${error.message}`);
        throw error;
    }
};

const authenticateUser =  async (inumber, password) => {
    try {
        return database.knex('users').where({
            username,
            password
        }).select('*');
    } catch (error) {
        console.error(`Error authenticating user: ${error.message}`);
        throw error;
    }
};

const loginUser = (inumber, password) => {
    try {
        return authenticateUser(inumber, password).then((user) => {
            if (user.length === 0) {
                throw new Error('Invalid username or password');
            }
    
            const token = jwt.sign({ id: user[0].id }, 'innovation', { expiresIn: '7d' });
            return { token };
        });
    } catch (error) {
        console.error(`Error logging in user: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listUsers,
    createUser,
    loginUser,
    getUser
};