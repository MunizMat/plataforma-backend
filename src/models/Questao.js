require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Questao extends Model {
    moldData(){

    }
}

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


module.exports = Questao;

const Prova = require('./Prova');

Questao.belongsTo(Prova);
Prova.hasMany(Questao);
Questao.sync();



