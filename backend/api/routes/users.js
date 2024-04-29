const express = require('express');

const router = express.Router();

const { listUsers, createUser, loginUser } = require('../../controllers/userController');

router.get('/', async (req, res) => {
    const users = await listUsers();
    res.json({ users });
});

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