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

/**
 * Deletes a team from the database.
 *
 * @param {number} id - The ID of the team to delete.
 * @returns {Promise<number>} A promise that resolves to the number of deleted teams.
 * @throws {Error} If there is an error deleting the team.
 */
const deleteTeam = (id) => {
    try {
        return database.knex('teams').where('team_id', id).del();
    } catch (error) {
        console.error(`Error deleting team: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listTeams,
    getTeam,
    deleteTeam
}