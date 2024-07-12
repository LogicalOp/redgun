const express = require('express');
const router = express.Router();

const { listUsers, getUser, createUser } = require('../../controllers/userController');

/**
 * GET Methods for Users
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        const users = await listUsers();
        res.status(200).json({users: users});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * POST Methods for Users
 * 
 * 
 */
router.post('/register', async(req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT Method for Users
 * 
 * 
 */
router.put('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Update user by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * DELETE Method for Users
 * 
 * 
 */
router.delete('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Delete user by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;