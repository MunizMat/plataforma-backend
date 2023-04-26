require('dotenv').config();
const express = require('express');
const router = express.Router();
const gabaritoController = require('../../controllers/gabaritoController');

router.post('/', gabaritoController.store);
router.get('/' ,gabaritoController.index);
router.get('/:id', gabaritoController.show);
router.put('/', gabaritoController.update);
router.delete('/:id', gabaritoController.delete);

module.exports = router;