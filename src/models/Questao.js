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
    },
    correspondencia: {
        type: DataTypes.JSON
    }


}, { sequelize, tableName: 'Questoes' });

const Prova = require('./Prova');
const Gabarito = require('./Gabarito');

Prova.hasMany(Questao);
Questao.belongsTo(Prova);

Gabarito.hasMany(Questao);
Questao.belongsTo(Gabarito)

module.exports = Questao;

Questao.sync();



