require('dotenv').config();
const Prova = require('../models/Prova');
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Simulado extends Model {}

Simulado.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

}, { sequelize });


Simulado.sync({ alter: true });

module.exports = Simulado;
