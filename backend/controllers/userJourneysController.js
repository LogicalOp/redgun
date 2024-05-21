const database = require('../database');

const listUserJourneys = () => {
    return database.knex.select('*').from('user_journeys');
};

const getUserJourney = (id) => {
    return database.knex('user_journeys').where({
        id
    }).select('*');
};

const createUserJourney = (userJourney) => {
    return database.knex('user_journeys').insert({
        user_id: userJourney.user_id,
        journey_id: userJourney.journey_id,
        progress: userJourney.progress,
        completion_status: userJourney.completion_status,
    }).returning('*');
};

module.exports = {
    listUserJourneys,
    getUserJourney,
    createUserJourney
};
