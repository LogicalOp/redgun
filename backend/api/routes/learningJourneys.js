const express = require('express');
const router = express.Router();

const { listLearningJourneys, getLearningJourneys, deleteLearningJourney } = require('../../controllers/learningJourneysController');

/**
 * GET Methods for Learning Journeys
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        const learningJourneys = await listLearningJourneys();
        res.status(200).json({ learningJourneys });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const learningJourney = await getLearningJourneys(req.params.id);
        res.status(200).json({ learningJourney });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/** 
 * POST Methods for Learning Journeys
 * 
 * 
 */
router.post('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Add learning journey to backend' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT Methods for Learning Journeys
 * 
 * 
 */
router.put('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Update learning journey by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * DELETE Methods for Learning Journeys
 * 
 * 
 */
router.delete('/:id', async(req, res) => {
    try {
        const deleted = await deleteLearningJourney(req.params.id);
        res.status(200).json({ message: 'Learning journey deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;