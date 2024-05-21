const database = require('../database');


const listManagers = () => {
    return database.knex.select('*').from('managers');
};

const getManager = (id) => {
    return database.knex('managers').where({
        id
    }).select('*');
};

const createManager = (manager) => {
    return database.knex('managers').insert({
        manager_id: manager.manager_id,
        manager_name: manager.manager_name,
        email: manager.email,
    }).returning('*');
};

const updateManager = (id, manager) => {
    return database.knex('managers').where({
        id
    }).update({
        name: manager.name,
        email: manager.email,
    }).returning('*');
};

const deleteManager = (id) => {
    return database.knex('managers').where({
        id
    }).del();
};

module.exports = {
    listManagers,
    getManager,
    createManager,
    updateManager,
    deleteManager
};