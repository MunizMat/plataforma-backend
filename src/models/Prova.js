require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const Gabarito = require('./Gabarito');


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
        const gabarito = await Gabarito.create({ ProvaId: prova.id, nome: prova.nome});
    } catch (error) {
        console.log(error);
    }
    
});

Prova.sync();

module.exports = Prova;


