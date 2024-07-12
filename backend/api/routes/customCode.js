const express = require('express');
const router = express.Router();

/**
 *  GET Methods for Custom Code feature
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Custom code GET method' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Custom code GET method with ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * POST Methods for Custom Code feature
 * 
 * 
 */
router.post('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Add custom code to backend' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT Methods for Custom Code feature
 * 
 * 
 */
router.put('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Update code sample by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * DELETE Methods for Custom Code feature
 * 
 * 
 */
router.post('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Delete code sample by ID'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;