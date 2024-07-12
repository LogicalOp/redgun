const database = require('../database');

/**
 * Retrieves a list of teams from the database.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of team objects.
 * @throws {Error} If there is an error retrieving the teams from the database.
 */
const listTeams = () => {
    try {
        return database.knex.select('*').from('teams');
    } catch (error) {
        console.error(`Error listing teams: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves a team from the database based on the provided ID.
 *
 * @param {number} id - The ID of the team to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the team object.
 * @throws {Error} If there is an error retrieving the team.
 */
const getTeam = (id) => {
    try {
        return database.knex.select('*').from('teams').where('team_id', id);
    } catch (error) {
        console.error(`Error getting team: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listTeams,
    getTeam
}