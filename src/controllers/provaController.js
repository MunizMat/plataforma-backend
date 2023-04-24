const Prova = require('../models/Prova');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const provaController = {

    index: async (req, res) => {
        try {
            const provas = await Prova.findAll({ attributes: ['id', 'nome', 'vestibular', 'prova', 'ano', 'dia'] });
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
        const { ano, dia, jsonGabarito } = req.body;
        const provas = Object.keys(jsonGabarito);
        const letrasProvas = provas.map(value => value.split('PROVAS ')[1]);
        try {
            for (const letra of letrasProvas){
                const prova = await Prova.create({
                    nome: `UNICAMP-${ano}-${letra}`,
                    vestibular: 'UNICAMP',
                    prova: letra,
                    dia,
                    ano,
                    gabarito: jsonGabarito[`PROVAS ${letra}`]
                });
            }
            res.json(provas);
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

module.exports = provaController;