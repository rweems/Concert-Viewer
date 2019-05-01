
const express = require('express');
const router = express.Router();

const tourController = require('../controllers/tours.js');

//tour routes
router.get('/', tourController.index);

router.get('/new',tourController.new);

router.post('/',tourController.create);

router.get('/:id/edit', tourController.edit);

router.put('/:id', tourController.update);

router.get('/:id/show',tourController.show);

router.get('/:id/delete',tourController.delete);


//band routes
const bandController = require('../controllers/bands.js');
router.get('/band/:id',bandController.index);

router.get('/band/:id/new',bandController.new);

router.post('/band/:id', bandController.create);

router.get('/band/:id/edit', bandController.edit);

router.get('/band/:id/show', bandController.show);

router.put('/band/:id/update', bandController.update);

router.get('/band/:id/delete',bandController.delete);


const memberController = require('../controllers/members.js');
router.get('/member/:id',memberController.index);

router.get('/member/:id/new',memberController.new);

router.post('/member/:id', memberController.create);

router.get('/member/:id/edit', memberController.edit);

router.get('/member/:id/show', memberController.show);

router.put('/member/:id/update', memberController.update);

router.get('/member/:id/delete',memberController.delete);

module.exports = router;