require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const { default: axios } = require('axios');


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

module.exports = Prova;

const Gabarito = require('./Gabarito');


Prova.afterCreate(async (prova, options) => {
    try {
        const response = await axios.post('http://localhost:3000/provas/gabarito', { ProvaId: prova.id, nome: prova.nome})
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }

});

Prova.sync();


