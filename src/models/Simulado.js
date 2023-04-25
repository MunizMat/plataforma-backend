require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Simulado extends Model {}


Simulado.init({
    isInProgress: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    startedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    finishedAt: {
        type: DataTypes.DATE
    },
    availableUntil: {
        type: DataTypes.DATE
    },
    respostas: {
        type: DataTypes.JSON
    },
    tempoDeProva: {
        type: DataTypes.VIRTUAL,
        allowNull: false
    },
    provaId: {
        type: DataTypes.INTEGER,
        references: { model: 'Provas', key: 'id' }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users', key: 'id' }
    }

}, { sequelize });


Simulado.beforeSave(async (simulado, options) => {
    function getExamTime() {
        const [horas, minutos] = simulado.tempoDeProva.split('h');
        const horasEmMilisegundos = horas * 60 * 60 * 1000;
        
        if (minutos){
            return horasEmMilisegundos + minutos * 60 * 1000;
        }

        return horasEmMilisegundos;
    };
    const availableUntil = new Date(Date.now() + getExamTime());
    simulado.availableUntil = availableUntil;
});
module.exports = Simulado;

const Prova = require('../models/Prova');
const User = require('../models/User');

Simulado.belongsTo(Prova, { foreignKey: 'provaId'});
Simulado.belongsTo(User, { foreignKey: 'userId'});


Simulado.sync();
