require('dotenv').config();
const { Sequelize, DataTypes, Model} = require('sequelize');
const openai = require('openai');
const sequelize = new Sequelize(process.env.MYSQL_URL);

class Questao extends Model {
    async getCategory(texto){
        const model = 'text-davinci-002';
        const prompt = `Classifique a seguinte questão de prova em uma das categorias: ['Exatas', 'Humanas']\nQuestão de prova:${texto}\n\nCategory:`;
        const response = await openai.completions.create({
            engine: model,
            prompt,
            max_tokens: 1,
            n: 1,
            stop: '\n',
        }, { apiKey: process.env.OPENAI_API_KEY });
        console.log(response);
    }
    getSubCategory(){}
    getCategory(){}
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

const Prova = require('./Prova');
const Gabarito = require('./Gabarito');

Prova.hasMany(Questao);
Questao.belongsTo(Prova);

Gabarito.hasMany(Questao);
Questao.belongsTo(Gabarito)

module.exports = Questao;

Questao.sync();



