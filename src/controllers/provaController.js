const Prova = require('../models/Prova');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const provaController = {

    index: async (req, res) => {
        try {
            const provas = await Prova.findAll({ attributes: ['id', 'nome', 'vestibular', 'prova', 'ano', 'dia', 'tempoDeProva'] });
            res.json(provas);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },

    show: async (req, res) => {
        const { id } = req.params;
        try {
            const prova = await Prova.findByPk(id);
            res.json(prova);
        } catch (error) {
            console.log(error);
            res.json(error);
        }

    },

    store: async (req, res) => {
        try {
            const prova = await Prova.create(req.body);
            res.json(prova);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
    
    delete: async (req, res) => {

    },

    update: async (req, res) => {
        try {
            const provas = await Prova.findAll({ where: { vestibular: 'UNICAMP', ano: '2022'}});
            provas.forEach(async(prova) => {
                await prova.update(req.body);
            })
            res.json(provas);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
}

module.exports = provaController;