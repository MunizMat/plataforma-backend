require('dotenv').config();
const express = require('express');
require('body-parser');
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');

function App(){
    this.app = express();

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    // Rotas
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
}

module.exports = new App();

