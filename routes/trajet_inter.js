const express = require('express');
const { CreateTrajet,GetTrajet } = require('../controllers/trajet_inter.js');
const router = express.Router();


router.post('/create', CreateTrajet);
router.get('/get', GetTrajet);

module.exports = router;