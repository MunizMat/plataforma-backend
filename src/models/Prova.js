require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Prova extends Model {}


Prova.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    vestibular: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prova: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tempoDeProva: {
        type: DataTypes.STRING
    },
    gabarito: {
        type: DataTypes.JSON,
        allowNull: false,
    },

}, { sequelize });

module.exports = Prova;

const Simulado = require('../models/Simulado');

Prova.hasMany(Simulado);


Prova.sync();


