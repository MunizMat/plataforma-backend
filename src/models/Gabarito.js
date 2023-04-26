require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Gabarito extends Model {}


Gabarito.init({
    alternativas: {
        type: DataTypes.STRING
    }

}, { sequelize });

const Prova = require('./Prova');
const Questao = require('./Questao');

Prova.hasOne(Gabarito);
Questao.belongsTo(Gabarito);

Gabarito.belongsTo(Prova);
Gabarito.hasMany(Questao);

module.exports = Gabarito;

Gabarito.sync();



