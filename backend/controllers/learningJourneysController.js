const database = require('../database');

/**
 * Retrieves a list of learning journeys from the database.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of learning journeys.
 * @throws {Error} If there is an error retrieving the learning journeys.
 */
const listLearningJourneys = () => {
    try {
        return database.knex.select('*').from('learning_journeys');
    } catch (error) {
        console.error(`Error listing learning journeys: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves learning journeys from the database based on the provided journey ID.
 *
 * @param {number} journey_id - The ID of the learning journey to retrieve.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of learning journeys.
 * @throws {Error} - If there is an error retrieving the learning journey.
 */
const getLearningJourneys = (journey_id) => {
    try {
        return database.knex.select('*').from('learning_journeys').where('journey_id', journey_id);
    } catch (error) {
        console.error(`Error getting learning journey: ${error.message}`);
        throw error;
    }
};

/**
 * Deletes a learning journey from the database.
 *
 * @param {number} journey_id - The ID of the learning journey to delete.
 * @returns {Promise<number>} A promise that resolves to the number of rows deleted.
 * @throws {Error} If there is an error deleting the learning journey.
 */
const deleteLearningJourneys = (journey_id) => {
    try {
        return database.knex('learning_journeys').where('journey_id', journey_id).del();
    } catch (error) {
        console.error(`Error deleting learning journey: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listLearningJourneys,
    getLearningJourneys,
    deleteLearningJourneys
};