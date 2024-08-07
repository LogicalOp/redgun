const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', async(req, res) => {
    const filePath = path.join(__dirname, '../../output.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(JSON.parse(data));
        }
    });
});


module.exports = router;