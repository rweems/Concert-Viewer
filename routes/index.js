
const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tours.js');

router.get('/', tourController.index);

router.get('/new',tourController.new);

router.post('/',tourController.create);

router.get('/:id/edit', tourController.edit);

router.put('/:id', tourController.update);

router.get('/:id',tourController.show);

router.put('/:id', tourController.update);
module.exports = router;