const database = require('../database');


const listCourses = () => {
    return database.knex.select('*').from('courses');
}

const createCourse = (course) => {
    return database.knex('courses').insert({
        id: course.id,
        name: course.name,
        description: course.description,
        difficulty: course.difficulty,
        time: course.time
    }).returning('*');
};

const getCourse = (id) => {
    return database.knex('courses').where({
        id
    }).select('*');
};

const updateCourse = (id, course) => {
    return database.knex('courses').where({
        id
    }).update({
        name: course.name,
        description: course.description,
        difficulty: course.difficulty,
        time: course.time
    }).returning('*');
};

const deleteCourse = (id) => {
    return database.knex('courses').where({
        id
    }).del();
};

module.exports = {
    listCourses,
    createCourse,
    getCourse,
    updateCourse,
    deleteCourse
};
