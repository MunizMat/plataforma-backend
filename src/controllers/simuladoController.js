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
            const prova = await simulado.getProva();
            res.json({ simulado, prova });
        } catch (error) {
            console.log(error);
            res.json(error);
        }
        
    },
    
    delete: async (req, res) => {

    },

    update: async (req, res) => {
        try {
            const simulado = await Simulado.findByPk(req.params.id);
            const updatedSimulado = await simulado.update(req.body);
            res.json(updatedSimulado);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
}

module.exports = simuladoController;