const express = require('express');

const router = express.Router();

const { listUsers, createUser, loginUser, getUser } = require('../../controllers/userController');


/**
 * GET Methods for Users
 */
router.get('/', async (req, res) => {
    const users = await listUsers();
    res.json({ users });
});

router.get('/:id', async (req, res) => {
    const user = await getUser(req.params.id);
    res.json({ user });
});


/**
 * POST Methods for Users
 */
router.post('/register', async (req, res) => {
    const user = await createUser(req.body);
    res.json({ user });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const token = await loginUser(username, password);
    
    res.json({ token: token });
});


module.exports = router;