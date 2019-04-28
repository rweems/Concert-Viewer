
const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tours.js');

//tour routes
router.get('/', tourController.index);

router.get('/new',tourController.new);

router.post('/',tourController.create);

router.get('/:id/edit', tourController.edit);

router.put('/:id', tourController.update);

router.get('/:id',tourController.show);

router.put('/:id', tourController.update);

router.get('/:id/delete',tourController.delete);


//band routes
const bandController = require('../controllers/bands.js');
router.get('/:id',bandController.index);

router.get('/:id/new',bandController.new);

router.post('/:id',bandController.create);

router.get('/{tourId}/:id/show', bandController.show);

module.exports = router;