require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);


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


Prova.afterCreate(async (prova, options) => {
    try {
    } catch (error) {
        console.log(error);
    }
    
});

module.exports = Prova;

const Questao = require('./Questao');
const Simulado = require('./Simulado');

Prova.hasMany(Questao);
Questao.belongsTo(Prova);

Prova.hasMany(Simulado);
Simulado.belongsTo(Prova);

Prova.sync();




