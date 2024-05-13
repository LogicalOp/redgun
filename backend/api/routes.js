const express = require('express');
const userRoutes = require('./routes/users');
const tokenRoutes = require('./routes/tokens');
const courseRoutes = require('./routes/courses');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/', tokenRoutes);

module.exports = router;