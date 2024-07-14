const database = require('../database');

/**
 * Retrieves a list of custom codes from the database.
 *
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of custom codes.
 * @throws {Error} If there is an error retrieving the custom codes.
 */
const listCustomCode = () => {
    try {
        return database.knex.select('*').from('custom_code');
    } catch (error) {
        console.error(`Error listing custom_code: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves custom code by code_id.
 *
 * @param {number} code_id - The ID of the custom code to retrieve.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of custom code objects.
 * @throws {Error} If there is an error retrieving the custom code.
 */
const getCustomCode = (project_id) => {
    try {
        return database.knex.select('*').from('custom_code').where('project_id', project_id);
    } catch (error) {
        console.error(`Error getting custom_code: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves custom code by date.
 *
 * @param {string} date - The date to filter the custom code.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of custom code objects.
 * @throws {Error} - If there's an error retrieving the custom code.
 */
const getCustomCodeByDate = (date) => {
    try {
        return database.knex.select('*').from('custom_code').whereRaw("to_char(date, 'YYYY-MM-DD') = ?", [date]);
    } catch (error) {
        console.error(`Error getting custom_code: ${error.message}`);
        throw error;
    }
};

/**
 * Retrieves custom code by INumber.
 *
 * @param {string} inumber - The INumber to search for.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of custom code objects.
 * @throws {Error} - If there's an error retrieving the custom code.
 */
const getCustomCodeByINumber = (inumber) => {
    try {
        return database.knex.select('*').from('custom_code').where('inumber', inumber);
    } catch (error) {
        console.error(`Error getting custom_code: ${error.message}`);
        throw error;
    }
};

/**
 * Creates a custom code in the database.
 *
 * @param {Object} customCode - The custom code object to be inserted.
 * @returns {Promise} A promise that resolves to the inserted custom code.
 * @throws {Error} If there is an error creating the custom code.
 */
const createCustomCode = (customCode) => {
    try {
        return database.knex('custom_code').insert(customCode);
    } catch (error) {
        console.error(`Error creating custom_code: ${error.message}`);
        throw error;
    }
};

/**
 * Deletes a custom code entry from the database.
 *
 * @param {number} code_id - The ID of the custom code entry to delete.
 * @returns {Promise<number>} A promise that resolves to the number of rows deleted.
 * @throws {Error} If there is an error deleting the custom code entry.
 */
const deleteCustomCode = (project_id) => {
    try {
        return database.knex.select('*').from('custom_code').where('project_id', project_id).del();
    } catch (error) {
        console.error(`Error deleting custom_code: ${error.message}`);
        throw error;
    }
};

module.exports = {
    listCustomCode,
    getCustomCode,
    createCustomCode,
    deleteCustomCode,
    getCustomCodeByDate,
    getCustomCodeByINumber
};