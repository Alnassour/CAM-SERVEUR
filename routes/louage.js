const express = require('express');
const { Createlouage ,Getlouage,GetAll } = require('../controllers/louage.js');
const router = express.Router();


router.post('/create', Createlouage);
router.get('/get/:champ/:valeur', Getlouage);
router.get('/getAll', GetAll);

module.exports = router;