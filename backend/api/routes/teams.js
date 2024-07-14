const express = require('express');
const router = express.Router();

const { listTeams, getTeam, deleteTeam } = require('../../controllers/teamsController');

/**
 * GET Methods for Teams
 * 
 * 
 */
router.get('/', async(req, res) => {
    try {
        const teams = await listTeams();
        res.status(200).json({ teams: teams });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const team = await getTeam(req.params.id);
        res.status(200).json({ team: team });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/** 
 * POST Methods for Teams
 * 
 * 
 */
router.post('/', async(req, res) => {
    try {
        res.status(200).json({ message: 'Add team to backend' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * PUT Methods for Teams
 * 
 * 
 */
router.put('/:id', async(req, res) => {
    try {
        res.status(200).json({ message: 'Update team by ID' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * DELETE Methods for Teams
 * 
 * 
 */
router.delete('/:id', async(req, res) => {
    try {
        const teams = await deleteTeam(req.params.id);
        res.status(200).json({ teams: teams });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;