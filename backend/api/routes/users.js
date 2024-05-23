const express = require('express');

const router = express.Router();

const { listUsers, createUser, loginUser, getUser } = require('../../controllers/userController');

/**
 * GET Methods for Users
 */
router.get('/', async (req, res) => {
    try { 
        const users = await listUsers();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * POST Methods for Users
 */
router.post('/register', async (req, res) => {
    try {
        const user = await createUser(req.body);
        if (!user || user.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(201).json({ user });
    } catch (error) {
        console.error(`Error in POST /users/register: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const token = await loginUser(username, password);
    
    res.json({ token: token });
});


module.exports = router;