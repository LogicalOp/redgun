const express = require('express');
const router = express.Router();

/**
 * GET Methods for Feed
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Feed GET method' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Get message by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/** 
 * POST Methods for Feed
 * 
 * 
 */
router.post('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Add message to feed' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT Methods for Feed
 * 
 * 
 */ 
router.post('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Update message by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * DELETE Methods for Feed
 * 
 * 
 */
router.delete('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Delete message by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;