require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Questao extends Model {}


Questao.init({
    alternativas: {
        type: DataTypes.STRING
    }, 
    alternativaCorreta: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.STRING
    },
    subCategoria: {
        type: DataTypes.STRING
    }


}, { sequelize });

const Prova = require('./Prova');

Prova.hasMany(Questao);
Questao.belongsTo(Prova);

module.exports = Questao;

Questao.sync();



