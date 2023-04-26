const Questao = require('../models/Questao');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const questaoController = {

    index: async (req, res) => {

    },

    show: async (req, res) => {


    },

    store: async (req, res) => {
        try {
            const questao =  await Questao.create(req.body);
            res.json(questao);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
    
    delete: async (req, res) => {

    },

    update: (req, res) => {
        res.send('Update de users');
    },
}

module.exports = questaoController;