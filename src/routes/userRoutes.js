require('dotenv').config();
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userAuth = require('../middlewares/userAuth');

router.post('/', userController.store);
router.get('/', userAuth ,userController.index);
router.get('/:id', userController.show);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;