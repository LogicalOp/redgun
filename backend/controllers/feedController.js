const database = require('../database');

const getFeed = () => {
    return database.knex.select('*').from('feed');
};

const createMessage = (message) => {
    return database.knex('feed').insert({
        message_id: message.id,
        title: message.title,
        message: message.message,
        user_id: message.user_id,
        post_date: message.post_date,
    }).returning('*');
};

const getMessage = (id) => {
    return database.knex('feed').where({
        id
    }).select('*');
};

module.exports = {
    getFeed,
    createMessage,
    getMessage
};