const { post } = require('../api/routes');
const database = require('../database');

const listCustomCode = () => {
    return database.knex.select('*').from('custom_code');
};

const getCustomCode = (id) => {
    return database.knex('custom_code').where({
        id
    }).select('*');
};

const createCustomCode = (customCode) => {
    return database.knex('custom_code').insert({
        code_id: customCode.code_id,
        title: customCode.title,
        message: customCode.message,
        custom_code: customCode.custom_code,
        user_id: customCode.user_id,
        post_date: customCode.post_date,
    }).returning('*');
};

module.exports = {
    listCustomCode,
    getCustomCode,
    createCustomCode
};