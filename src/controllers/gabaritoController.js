const Questao = require('../models/Questao');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const gabaritoController = {

    index: async (req, res) => {

    },

    show: async (req, res) => {


    },

    store: async (req, res) => {

    },
    
    delete: async (req, res) => {

    },

    update: (req, res) => {
        res.send('Update de users');
    },
}

module.exports = gabaritoController;