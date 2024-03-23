const express = require('express');
const { CreateColis ,GetColis,GetAll } = require('../controllers/Colis.js');
const router = express.Router();


router.post('/create', CreateColis);
router.get('/get/:champ/:valeur', GetColis);
router.get('/getAll', GetAll);

module.exports = router;