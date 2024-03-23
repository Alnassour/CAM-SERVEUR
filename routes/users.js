const express = require('express');
const { Register,Login } = require('../controllers/users.js');
const router = express.Router();


router.post('/register', Register);
router.get('/login', Login);

module.exports = router;