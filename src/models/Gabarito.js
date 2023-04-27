require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const FormatProvaData = require('../modules/DataManipulation/FormatProvaData');
const { default: axios } = require('axios');
const Questao = require('./Questao');

class Gabarito extends Model {}


Gabarito.init({
    nome: {
        type: DataTypes.STRING
    }
}, { sequelize });


Gabarito.afterCreate(async (gabarito, options) => {
    const rawText = require(`../modules/DataManipulation/rawPDFText/${gabarito.nome}`);
    const provaData = new FormatProvaData(rawText);
    provaData.answers.forEach(async (answer) => {
        const questao = await Questao.create({...answer, ProvaId: gabarito.ProvaId, GabaritoId: gabarito.id});
    });
});

Gabarito.sync();

module.exports = Gabarito;




