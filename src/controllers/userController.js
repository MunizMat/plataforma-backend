const User = require('../models/User');
 
const userController = {

    index: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.send('Não foi possível encontrar os usuários');
        }
    },
    show: async (req, res) => {
        console.log('Os dados chegaram');
        res.json(req.body);
        // try {
        //     let users = await User.findAll();
        //     users = JSON.stringify(users, ['id', 'createdAt', 'updatedAt'], ' ');
        //     res.send(users);
        // } catch (error) {
        //     console.log(error);
        //     res.send('Não foi possível encontrar os usuários');
        // }
    },

    store: async (req, res) => {
        try {
            console.log(req.body);
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            console.log(error);
            const arrayErros = error.errors.map((err) =>  {return { field: err.path, message: err.message}});
            const errors = { errors: [...arrayErros]};
            res.json(errors);
        }
    },
    
    delete: async (req, res) => {
        try {
            const user = await User.findOne({where: { id: req.params.id }});
            res.send(user);
        } catch (error) {
            console.log(error);
            res.send('Não foi possível apagar o usuário na base de dados');
        }
    },

    update: (req, res) => {
        res.send('Update de users');
    },
}

module.exports = userController;