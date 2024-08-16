const database = require('../database');

/**
 * Retrieves a list of likes.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of like objects.
 * @throws {Error} If there is an error listing the likes.
 */
const listLikes = () => {
    try {
        return database.knex.select('*').from('likes');
    } catch (error) {
        console.error(`Error listing likes: ${error.message}`);
        throw error;
    }
};

const getLikesByInumber = (inumber) => {
    try {
        return database.knex.select('*').from('likes').where('inumber', inumber);
    } catch (error) {
        console.error(`Error getting likes: ${error.message}`);
        throw error;
    }
};

const getLikesByMessageId = (messageId) => {
    try {
        return database.knex.select('*').from('likes').where('message_id', messageId);
    } catch (error) {
        console.error(`Error getting likes: ${error.message}`);
        throw error;
    }
};

const likeMessage = (messageId, inumber, isLiked) => {
    try {
        return database.knex('likes').insert({ message_id: messageId, inumber: inumber, is_liked: isLiked });
    } catch (error) {
        console.error(`Error liking message: ${error.message}`);
        throw error;
    }
};

const unlikeMessage = (messageId, inumber) => {
    try {
        return database.knex('likes').where('message_id', messageId).andWhere('inumber', inumber).del();
    } catch (error) {
        console.error(`Error unliking message: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listLikes,
    getLikesByInumber,
    getLikesByMessageId,
    likeMessage,
    unlikeMessage
}