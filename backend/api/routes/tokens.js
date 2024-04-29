const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/check-token', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    jwt.verify(token, 'innovation', (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Invalid token' });
        } else {
            res.json({ message: 'Valid token' });
        }
    });
});

module.exports = router;