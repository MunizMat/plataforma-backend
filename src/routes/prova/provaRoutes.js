require('dotenv').config();
const express = require('express');
const provas = express.Router();
const provaController = require('../../controllers/provaController');
const userAuth = require('../../middlewares/userAuth');

provas.post('/', provaController.store);
provas.get('/' ,provaController.index);
provas.get('/:id', provaController.show);
provas.put('/', provaController.update);
provas.delete('/:id', provaController.delete);

module.exports = provas;