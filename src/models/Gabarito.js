require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const MoldQuestionData = require('../modules/DataManipulation/MoldQuestionData');
const FormatProvaData = require('../modules/DataManipulation/FormatProvaData');


class Gabarito extends Model {}


Gabarito.init({
    nome: {
        type: DataTypes.STRING
    }
}, { sequelize });

const Questao = require('./Questao');
const { default: axios } = require('axios');


module.exports = Gabarito;

Gabarito.afterCreate(async (gabarito, options) => {
    const rawText = require(`../modules/DataManipulation/rawPDFText/${gabarito.nome}`);
    const provaData = new FormatProvaData(rawText);
    provaData.answers.forEach(async (answer) => {
        const response = await axios.post('http://localhost:3000/provas/questao', {...answer, ProvaId: gabarito.ProvaId, GabaritoId: gabarito.id});
    });
});


Gabarito.sync();



