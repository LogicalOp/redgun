const express = require('express');
const router = express.Router();

const { listUserJourneys, getUserJourneyByID, getUserJourneyByINumber, deleteUserJourney } = require('../../controllers/userJourneysController');

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
        const userJourney = await getUserJourneyByID(req.params.id);
        res.status(200).json({ userJourney });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/user/:inumber', async (req, res) => {
    try {
        const userJourney = await getUserJourneyByINumber(req.params.inumber);
        res.status(200).json({ userJourney });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * POST Methods for User Journeys
 */
router.post('/', async (req, res) => {
    try {
        res.status(200).json({ message: "POST requests for User Journey" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT Methods for User Journey
 * 
 * 
 */
router.put('/:id', async (req, res) => {
    try {
        res.status(200).json({ message: "PUT requests for User Journey" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * DELETE Methods for User Journey
 * 
 * 
 */
router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json({ message: "DELETE requests for User Journey" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;