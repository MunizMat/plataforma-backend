require('dotenv').config();
const express = require('express');
const router = express.Router();
const simuladoController = require('../../controllers/simuladoController');

router.post('/', simuladoController.store);
router.get('/' ,simuladoController.index);
router.get('/:id', simuladoController.show);
router.put('/:id', simuladoController.update);
router.delete('/:id', simuladoController.delete);

module.exports = router;