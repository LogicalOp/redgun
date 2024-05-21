const database = require('../database');

const listLearningJourneys = () => {
    return database.knex.select('*').from('learning_journeys');
};

const getLearningJourneys = (id) => {
    return database.knex('learning_journeys').where({
        id
    }).select('*');
};

const createLearningJourneys = (learningJourneys) => {
    return database.knex('learning_journeys').insert({
        journey_id: learningJourneys.journey_id,
        journey_name: learningJourneys.journey_name,
        description: learningJourneys.description,
        length: learningJourneys.length,
        difficulty: learningJourneys.difficulty,
        points: learningJourneys.points,
        team_id: learningJourneys.team_id,
    }).returning('*');
};

module.exports = {
    listLearningJourneys,
    getLearningJourneys,
    createLearningJourneys
};