const Questao = require('../models/Questao');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const CategorizeQuestion = require('../modules/DataManipulation/CategorizeQuestion');
const questaoController = {

    index: async (req, res) => {

    },

    show: async (req, res) => {


    },

    store: async (req, res) => {
        try {
            const questao =  await Questao.create(req.body);
            res.json(questao);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
    
    delete: async (req, res) => {

    },

    update: (req, res) => {
        res.send('Update de users');
    },

    categorize: async (req, res) => {
        try {
            const { id } = req.params;
            const question = await Questao.findByPk(id);
            const categorize = new CategorizeQuestion(req.body.text);
            const categories = {
                categoria: await categorize.getQuestionCategory(),
                subCategoria: await categorize.getQuestionSubCategory()
            };
            const updatedQuestion = await question.update(categories);
            res.json(updatedQuestion);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    },
}

module.exports = questaoController;