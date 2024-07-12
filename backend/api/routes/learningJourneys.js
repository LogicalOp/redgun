const express = require('express');
const router = express.Router();

/**
 * GET Methods for Learning Journeys
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Learning Journeys GET method' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Get learning journey by ID' });
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
        res.status(200).json({ message: 'Delete learning journey by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;