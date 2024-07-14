const database = require('../database');

/**
 * Retrieves a list of user journeys from the database.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of user journeys.
 * @throws {Error} If there is an error retrieving the user journeys.
 */
const listUserJourneys = () => {
    try {
        return database.knex.select('*').from('user_journey');
    } catch (error) {
        console.error(`Error listing user journeys: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves a user journey by its ID.
 *
 * @param {number} id - The ID of the user journey to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the user journey object.
 * @throws {Error} If there was an error retrieving the user journey.
 */
const getUserJourneyByID = (journey_id) => {
    try {
        return database.knex.select('*').from('user_journey').where('journey_id', journey_id);
    } catch (error) {
        console.error(`Error getting user journey: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves a user journey from the database based on the provided INumber.
 *
 * @param {string} inumber - The INumber of the user journey to retrieve.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of user journey objects.
 * @throws {Error} - If there is an error retrieving the user journey.
 */
const getUserJourneyByINumber = (inumber) => {
    try {
        return database.knex.select('*').from('user_journey').where('inumber', inumber);
    } catch (error) {
        console.error(`Error getting user journey: ${error.message}`);
        throw error;
    }
};


/**
 * Deletes a user journey from the database.
 *
 * @param {number} id - The ID of the user journey to delete.
 * @returns {Promise<number>} A promise that resolves to the number of deleted user journeys.
 * @throws {Error} If there is an error deleting the user journey.
 */
const deleteUserJourney = (id) => {
    try {
        return database.knex('user_journey').where('id', id).del();
    } catch (error) {
        console.error(`Error deleting user journey: ${error.message}`);
        throw error;
    }
};


module.exports = {
    listUserJourneys,
    getUserJourneyByID,
    getUserJourneyByINumber,
    deleteUserJourney,
};
