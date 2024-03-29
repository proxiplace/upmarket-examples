const express = require('express');
const router = express.Router();
const upmarketController = require('../controllers/upmarket.controller');

/* POST initialize lead. */
router.post('/initialize-lead', upmarketController.initializeCustomer);

/* POST create upmarket event. */
router.post('/create-event', upmarketController.createEvent);

module.exports = router;
