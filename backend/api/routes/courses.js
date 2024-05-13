const express = require('express');

const router = express.Router();

const { listCourses, createCourse, getCourse, updateCourse, deleteCourse } = require('../../controllers/courseController');


/**
 * GET Methods for Courses
 */
router.get('/', async (req, res) => {
    const courses = await listCourses();
    res.json({ courses });
});

router.get('/:id', async (req, res) => {
    const course = await getCourse(req.params.id);
    res.json({ course });
});

router.post('/:id', async (req, res) => {
    const course = await deleteCourse(req.params.id);
    res.json({ course });
});

module.exports = router;