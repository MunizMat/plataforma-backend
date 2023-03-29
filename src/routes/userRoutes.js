require('dotenv').config();
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.store);
router.get('/', userController.index);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;