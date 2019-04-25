
const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tours.js');

router.get('/', tourController.index);





module.exports = router;