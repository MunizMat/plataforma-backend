require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const FormatProvaData = require('../modules/DataManipulation/FormatProvaData');


class Prova extends Model {}


Prova.init({
    nome: {
        type: DataTypes.STRING
    },
    vestibular: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    provas: {
        type: DataTypes.JSON
    },
    dia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tempoDeProva: {
        type: DataTypes.STRING
    }

}, { sequelize });


module.exports = Prova;

const Questao = require('./Questao');
const Simulado = require('./Simulado');

Prova.hasMany(Questao);
Questao.belongsTo(Prova);

Prova.hasMany(Simulado);
Simulado.belongsTo(Prova);

Prova.afterCreate(async (prova, options) => {
    try {
        const rawText = require(`../modules/DataManipulation/rawPDFText/${prova.nome}`);
        const provaData = new FormatProvaData(rawText);
        provaData.answers.forEach(async (answer) => {
            const questao = await Questao.create({...answer, ProvaId: prova.id, alternativas: ['A', 'B', 'C', 'D', 'E']});
        })
    } catch (error) {
        console.log(error);
    }
    
});

Prova.sync();




