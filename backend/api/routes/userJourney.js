const express = require('express');
const router = express.Router();

const { listUserJourneys, createUserJourney, getUserJourney } = require('../../controllers/userJourneysController');

/**
 * GET Methods for User Journeys
 */
router.get('/', async (req, res) => {
    try {
        const userJourneys = await listUserJourneys();
        res.status(200).json({ userJourneys });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userJourney = await getUserJourney(req.params.id);
        res.status(200).json({ userJourney });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * POST Methods for User Journeys
 */


module.exports = router;