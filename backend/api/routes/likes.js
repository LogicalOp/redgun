const express = require('express');
const router = express.Router();

const { listLikes, getLikesByInumber, getLikesByMessageId, likeMessage, unlikeMessage } = require('../../controllers/likeController');

router.get('/', async (req, res) => {
    try {
        const likes = await listLikes();
        res.status(200).json({ likes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/user/:inumber', async (req, res) => {
    const { inumber } = req.params;
    try {
        const likes = await getLikesByInumber(inumber);
        res.status(200).json({ likes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/messages/:messageId', async (req, res) => {
    const { messageId } = req.params;
    try {
        const likes = await getLikesByMessageId(messageId);
        res.status(200).json({ likes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { message_id, inumber, isLiked } = req.body;
    try {
        await likeMessage(message_id, inumber, isLiked);
        res.status(200).json({ message: 'Message liked' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.delete('/', async (req, res) => {
    const { messageId, inumber } = req.body;
    try {
        await unlikeMessage(messageId, inumber);
        res.status(200).json({ message: 'Message unliked' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;