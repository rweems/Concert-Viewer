
const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tours.js');

router.get('/', tourController.index);

router.get('/new',tourController.new);

router.post('/',tourController.create);


module.exports = router;