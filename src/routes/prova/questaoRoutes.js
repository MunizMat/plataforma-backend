require('dotenv').config();
const express = require('express');
const router = express.Router();
const questaoController = require('../../controllers/questaoController');

router.post('/', questaoController.store);
router.get('/' ,questaoController.index);
router.get('/:id', questaoController.show);
router.put('/', questaoController.update);
router.put('/categorizar/:id', questaoController.categorize);
router.delete('/:id', questaoController.delete);

module.exports = router;