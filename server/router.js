const express = require('express');
const router = express.Router();
const Ctrl = require('./controller');

router.post('/post', Ctrl.doPost);
router.get('/get', Ctrl.doGet);

module.exports = router;
