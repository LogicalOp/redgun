const database = require('../database');

/**
 * Retrieves the feed from the database.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of feed objects.
 * @throws {Error} If there is an error retrieving the feed.
 */
const getFeed = () => {
    try {
        return database.knex('feed')
            .leftJoin('likes', 'feed.message_id', 'likes.message_id')
            .leftJoin('users', 'feed.inumber', 'users.inumber')
            .select('feed.*', 'likes.like_id', 'likes.isliked', 'users.first_name', 'users.last_name');
    } catch (error) {
        console.error(`Error listing feed: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves a message from the 'feed' table based on the provided message ID.
 *
 * @param {number} message_id - The ID of the message to retrieve.
 * @returns {Promise<Object[]>} A promise that resolves to an array of message objects matching the provided ID.
 * @throws {Error} If there is an error retrieving the message.
 */
const getMessage = (message_id) => {
    try {
        return database.knex.select('*').from('feed').where('message_id', message_id);
    } catch (error) {
        console.error(`Error getting message: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves messages by user.
 *
 * @param {string} inumber - The user's inumber.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of message objects.
 * @throws {Error} - If there was an error retrieving the messages.
 */
const getFeedByUser = (inumber) => {
    try {
        return database.knex.select('*').from('feed').where('inumber', inumber);
    } catch (error) {
        console.error(`Error getting message: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves feed by date from the database.
 *
 * @param {string} date - The date to filter the feed by.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of feed objects.
 * @throws {Error} - If there is an error retrieving the feed.
 */
const getFeedByDate = (date) => {
    try {
        // PostgreSQL version
        return database.knex.select('*').from('feed').whereRaw("to_char(date, 'YYYY-MM-DD') = ?", [date]);
    } catch (error) {
        console.error(`Error getting message: ${error.message}`);
        throw error;
    }
};

/**
 * Creates a new message in the feed.
 *
 * @param {Object} message - The message object to be inserted into the feed.
 * @returns {Promise} A promise that resolves to the result of the insert operation.
 * @throws {Error} If there is an error creating the message.
 */
const createMessage = (message) => {
    try {
        return database.knex('feed').insert(message);
    } catch (error) {
        console.error(`Error creating message: ${error.message}`);
        throw error;
    }
};

/**
 * Updates a message in the 'feed' table.
 *
 * @param {number} message_id - The ID of the message to update.
 * @param {object} message - The updated message object.
 * @returns {Promise<number>} - A promise that resolves to the number of rows affected by the update.
 * @throws {Error} - If there is an error updating the message.
 */
const updateMessage = (message_id, message) => {
    try {
        return database.knex('feed').where('message_id', message_id).update(message);
    } catch (error) {
        console.error(`Error updating message: ${error.message}`);
        throw error;
    }
};

/**
 * Deletes a message from the feed.
 *
 * @param {number} message_id - The ID of the message to be deleted.
 * @returns {Promise<number>} A promise that resolves to the number of deleted rows.
 * @throws {Error} If there is an error deleting the message.
 */
const deleteMessage = (message_id) => {
    try {
        return database.knex('feed').where('message_id', message_id).del();
    } catch (error) {
        console.error(`Error deleting message: ${error.message}`);
        throw error;
    }
};

module.exports = {
    getFeed,
    getMessage,
    getFeedByUser,
    getFeedByDate,
    createMessage,
    updateMessage,
    deleteMessage
};