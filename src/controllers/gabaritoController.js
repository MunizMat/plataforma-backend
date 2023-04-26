const Gabarito = require('../models/Gabarito');
require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const gabaritoController = {

    index: async (req, res) => {

    },

    show: async (req, res) => {


    },

    store: async (req, res) => {
        try {
            const gabarito = await Gabarito.create(req.body);
            res.json(gabarito);
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
}

module.exports = gabaritoController;