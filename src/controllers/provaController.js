const Prova = require('../models/Prova');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const provaController = {

    /*
    [{
        vestibular: 'FUVEST',
        anosDisponiveis: ['2023', '2022', '2021']
    },
    {
        vestibular: 'UNICAMP',
        anosDisponiveis: ['2022', '2021']
    }]
    */

    index: async (req, res) => {
        try {
            const vestibulares = await sequelize.query("SELECT DISTINCT vestibular FROM Provas");
            const data = [ ...vestibulares[0] ];
            for (let i = 0; i < data.length; i++){
                const anosDisponiveis = await sequelize.query(`SELECT DISTINCT ano FROM Provas WHERE vestibular = '${data[i].vestibular}' `);
                console.log(anosDisponiveis);
                data[i].anosDisponiveis = anosDisponiveis[03].map(obj => obj.ano);
            }
            res.json(data);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },

    show: async (req, res) => {

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