const express = require('express');
const router = express.Router();
const upmarketController = require('../controllers/upmarket.controller');

/* POST initialize lead. */
router.post('/initialize-lead', upmarketController.initializeLead);

/* POST create upmarket event. */
router.post('/', upmarketController.createEvent);

module.exports = router;
