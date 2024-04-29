const express = require('express');
const userRoutes = require('./routes/users');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/users', userRoutes);

module.exports = router;