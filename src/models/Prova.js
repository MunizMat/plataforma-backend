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
    gabarito: {
        type: DataTypes.JSON,
        allowNull: false,
    },

}, { sequelize });

Prova.sync();

module.exports = Prova;
