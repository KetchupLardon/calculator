const express = require('express');
const Calculator = require('../controllers/Calculator');

const router = express.Router();

const calculator = new Calculator();

router.post('/', calculator.sendResult);

module.exports = router;