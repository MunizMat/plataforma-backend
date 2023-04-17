const Prova = require('../models/Prova');
 
const provaController = {

    index: async (req, res) => {

    },

    show: async (req, res) => {

    },

    store: async (req, res) => {
        try {
            const prova = await Prova.create(req.body);
            res.json(prova);
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

module.exports = provaController;