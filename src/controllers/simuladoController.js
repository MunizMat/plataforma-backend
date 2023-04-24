const Simulado = require('../models/Simulado');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const simuladoController = {

    index: async (req, res) => {

    },

    show: async (req, res) => {

    },

    store: async (req, res) => {
        try {
            const simulado = await Simulado.create(req.body);
            res.json(simulado);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
        
    },
    
    delete: async (req, res) => {

    },

    update: (req, res) => {
    },
}

module.exports = simuladoController;