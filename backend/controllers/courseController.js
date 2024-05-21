const database = require('../database');


const listCourses = () => {
    return database.knex.select('*').from('courses');
}

const createCourse = (course) => {
    return database.knex('courses').insert({
        id: course.id,
        name: course.name,
        description: course.description,
        length: course.length,
        difficulty: course.difficulty,
        points: course.points,
        user_id: course.user_id,
        progrress: course.progress,
        completion_status: course.completion_status,
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
        length: course.length,
        difficulty: course.difficulty,
        points: course.points,
        user_id: course.user_id,
        progrress: course.progress,
        completion_status: course.completion_status,
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
