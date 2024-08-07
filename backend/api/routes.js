const express = require('express');
const users = require('./routes/users');
const teams = require('./routes/teams');
const feed = require('./routes/feed');
const customCode = require('./routes/customCode');
const tokenRoutes = require('./routes/tokens');
const userJourneyRoutes = require('./routes/userJourney');
const learningJourneyRoutes = require('./routes/learningJourneys');
const news = require('./routes/news');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.use('/users', users);
router.use('/teams', teams);
router.use('/feed', feed);
router.use('/customcode', customCode);
router.use('/user_journeys', userJourneyRoutes);
router.use('/learning_journeys', learningJourneyRoutes);
router.use('/news', news);
router.use('/', tokenRoutes);

module.exports = router;