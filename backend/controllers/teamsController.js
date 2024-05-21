const database = require('../database');


const listTeams = () => {
    return database.knex.select('*').from('teams');
};

const getTeam = (id) => {
    return database.knex('teams').where({
        id
    }).select('*');
};

const createTeam = (team) => {
    return database.knex('teams').insert({
        team_id: team.team_id,
        team_name: team.team_name,
        department: team.department,
        manager_id: team.manager_id,
        mentor_id: team.mentor_id,
        tech_lead: team.tech_lead,
    }).returning('*');
};

module.exports = {
    listTeams,
    getTeam,
    createTeam
};