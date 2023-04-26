require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Gabarito extends Model {}


Gabarito.init({


}, { sequelize });

const Prova = require('./Prova');

Prova.hasOne(Gabarito);
Gabarito.belongsTo(Prova);


module.exports = Gabarito;

Gabarito.sync();



