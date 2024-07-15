const express = require('express');
const router = express.Router();

const { listCustomCode, getCustomCode, getCustomCodeByDate, getCustomCodeByINumber, createCustomCode, deleteCustomCode } = require('../../controllers/customCodeController');

/**
 *  GET Methods for Custom Code feature
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        const customCode = await listCustomCode();
        res.status(200).json({ customCode: customCode });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const customCode = await getCustomCode(req.params.id);
        res.status(200).json({ customCode: customCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/date/:date', async(req, res) => {
    try {
        const customCode = await getCustomCodeByDate(req.params.date);
        res.status(200).json({ customCode: customCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/user/:inumber', async(req, res) => {
    try {
        const customCode = await getCustomCodeByINumber(req.params.inumber);
        res.status(200).json({ customCode: customCode });
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
        const customCode = await createCustomCode(req.body);
        res.status(200).json({ customCode: customCode });
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
router.delete('/:id', async(req, res) => {
    try {
        const customCode = await deleteCustomCode(req.params.id);
        res.status(200).json({ customCode: customCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;