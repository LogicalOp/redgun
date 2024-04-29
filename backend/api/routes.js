const express = require('express');
const userRoutes = require('./routes/users');
const tokenRoutes = require('./routes/tokens');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/users', userRoutes);
router.use('/', tokenRoutes);

module.exports = router;