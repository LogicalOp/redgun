const express = require('express');

const userRoutes = require('./routes/users');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

router.use('/api/users', userRoutes);

module.exports = router;