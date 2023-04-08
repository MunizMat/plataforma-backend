require('dotenv').config();
const express = require('express');
const cors =  require('cors');

// Routes
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');
const tokenRoutes = require('./src/routes/userRoutes');

function App(){
    this.app = express();

    this.app.use(cors({
        origin: 'http://127.0.0.1:5173'
    }))
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    // Rotas
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/auth', tokenRoutes);
}

module.exports = new App();

