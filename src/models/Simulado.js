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
    }

}, { sequelize });


Simulado.beforeCreate(async (simulado, options) => {
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

const Prova = require('./Prova');
const User = require('./User');

Simulado.belongsTo(User);
User.hasMany(Simulado);

Simulado.belongsTo(Prova);
Prova.hasMany(Simulado);

Simulado.sync();
