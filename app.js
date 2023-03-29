require('dotenv').config();
const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');

function App(){
    this.app = express();

    // Rotas
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
}

module.exports = new App();

