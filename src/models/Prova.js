require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Prova extends Model {}


Prova.init({
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

const Simulado = require('../models/Simulado');

Prova.hasMany(Simulado);


Prova.sync({ alter: true});


