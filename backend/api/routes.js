const express = require('express');
const userRoutes = require('./routes/users');
const teams = require('./routes/teams');
const feed = require('./routes/feed');
const customCode = require('./routes/customCode');
const tokenRoutes = require('./routes/tokens');
const userJourneyRoutes = require('./routes/userJourney');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/users', userRoutes);
router.use('/teams', teams);
router.use('/feed', feed);
router.use('/customcode', customCode);
router.use('/journeys', userJourneyRoutes);
router.use('/', tokenRoutes);

module.exports = router;