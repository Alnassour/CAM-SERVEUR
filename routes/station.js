const express = require('express');
const { CreateStation,GetStation} = require('../controllers/station.js');
const router = express.Router();


router.post('/create', CreateStation);
router.get('/get', GetStation);

module.exports = router;