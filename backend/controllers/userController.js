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
 * Retrieves users from the database based on the provided first name.
 *
 * @param {string} firstName - The first name of the users to retrieve.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of user objects matching the provided first name.
 * @throws {Error} - If there is an error retrieving the users from the database.
 */
const getUsersByFirstName = (firstName) => {
    try {
        return database.knex.select('*').from('users').where('first_name', firstName);
    } catch (error) {
        console.error(`Error getting user: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves users by last name from the database.
 *
 * @param {string} lastName - The last name of the users to retrieve.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of user objects.
 * @throws {Error} - If there is an error retrieving the users.
 */
const getUsersByLastName = (lastName) => {
    try {
        return database.knex.select('*').from('users').where('last_name', lastName);
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

/**
 * Authenticates a user by checking if the provided username and password match any records in the database.
 * @param {string} username - The username of the user to authenticate.
 * @param {string} password - The password of the user to authenticate.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of user objects matching the provided username and password.
 * @throws {Error} - If there is an error while authenticating the user.
 */
const authenticateUser =  async (inumber, password) => {
    try {
        return database.knex('users').where({
            inumber,
            password
        }).select('*');
    } catch (error) {
        console.error(`Error authenticating user: ${error.message}`);
        throw error;
    }
};

/**
 * Authenticates a user and generates a JWT token.
 *
 * @param {string} inumber - The user's inumber.
 * @param {string} password - The user's password.
 * @returns {Promise<{ token: string }>} - A promise that resolves to an object containing the generated token.
 * @throws {Error} - If the username or password is invalid.
 */
const loginUser = async (inumber, password) => {
    try {
        // Ensure inumber and password are not undefined
        if (!inumber || !password) {
            throw new Error('inumber or password is undefined');
        }

        const user = await authenticateUser(inumber, password);

        if (user.length === 0) {
            throw new Error('Invalid username or password');
        }

        const token = jwt.sign({ id: user[0].id }, 'innovation', { expiresIn: '7d' });
        return { token };
    } catch (error) {
        console.error(`Error logging in user: ${error.message}`);
        throw error;
    }
};

/**
 * Logs out a user by updating their token to null in the database.
 * @param {string} inumber - The inumber of the user to be logged out.
 * @returns {Promise<number>} - A promise that resolves to the number of rows affected in the database.
 * @throws {Error} - If there is an error logging out the user.
 */
const logoutUser = (inumber) => {
    try {
        return database.knex('users').where('inumber', inumber).update({ token: null });
    } catch (error) {
        console.error(`Error logging out user: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listUsers,
    getUser,
    updateUser,
    createUser,
    loginUser,
    logoutUser,
    getUsersByFirstName,
    getUsersByLastName
};