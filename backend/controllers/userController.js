const database = require('../database');
const jwt = require('jsonwebtoken');

/**
 * Retrieves a list of users from the database.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of user objects.
 * @throws {Error} If there is an error retrieving the users from the database.
 */
const listUsers = () => {
    try {
        return database.knex.select('*').from('users');
    } catch (error) {
        console.error(`Error listing users: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves a user from the database based on the provided inumber.
 *
 * @param {string} inumber - The inumber of the user to retrieve.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of user objects.
 * @throws {Error} If there is an error retrieving the user.
 */
const getUser = (inumber) => {
    try {
        return database.knex.select('*').from('users').where('inumber', inumber);
    } catch (error) {
        console.error(`Error getting user: ${error.message}`);
        throw error;
    }
};

/**
 * Creates a new user in the database.
 *
 * @param {Object} user - The user object to be inserted into the database.
 * @returns {Promise} A promise that resolves to the result of the database insert operation.
 * @throws {Error} If there is an error creating the user.
 */
const createUser = (user) => {
    try {
        return database.knex('users').insert(user);
    } catch (error) {
        console.error(`Error creating user: ${error.message}`);
        throw error;
    }
};

/**
 * Updates a user in the database.
 *
 * @param {string} inumber - The iNumber of the user to update.
 * @param {object} user - The updated user object.
 * @returns {Promise<number>} - A promise that resolves to the number of rows affected by the update.
 * @throws {Error} - If there is an error updating the user.
 */
const updateUser = (inumber, user) => {
    try {
        return database.knex('users').where('inumber', inumber).update(user);
    } catch (error) {
        console.error(`Error updating user: ${error.message}`);
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
    getUser,
    updateUser,
    createUser
};