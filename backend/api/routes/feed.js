const express = require('express');
const router = express.Router();

const { getFeed, getMessage, getFeedByDate, getFeedByUser, createMessage, updateMessage, deleteMessage } = require('../../controllers/feedController');

/**
 * GET Methods for Feed
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        const feed = await getFeed();
        res.status(200).json({ feed: feed });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const message = await getMessage(req.params.id);
        res.status(200).json({ message: message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/date/:date', async(req, res) => {
    try {
        const feed = await getFeedByDate(req.params.date);
        res.status(200).json({ feed: feed });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/user/:inumber', async(req, res) => {
    try {
        const feed = await getFeedByUser(req.params.inumber);
        res.status(200).json({ feed: feed });
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
        const message = await createMessage(req.body);
        res.status(200).json({ message: message });
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
        const message = await updateMessage(req.params.id, req.body);
        res.status(200).json({ message: message });
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
        const message = await deleteMessage(req.params.id);
        res.status(200).json({ message: message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;