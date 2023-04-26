require('dotenv').config();
const express = require('express');
const router = express.Router();
const provaController = require('../../controllers/provaController');
const userAuth = require('../../middlewares/userAuth');

router.post('/', provaController.store);
router.get('/' ,provaController.index);
router.get('/:id', provaController.show);
router.put('/', provaController.update);
router.delete('/:id', provaController.delete);

module.exports = router;