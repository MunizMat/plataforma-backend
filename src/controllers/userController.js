const User = require('../models/User');
 
const userController = {
    index: async (req, res) => {
        try {
            let users = await User.findAll();
            users = JSON.stringify(users, ['id', 'createdAt', 'updatedAt'], ' ');
            res.send(users);
        } catch (error) {
            console.log(error);
            res.send('Não foi possível encontrar os usuários');
        }
    },
    store: async (req, res) => {
        try {
            await User.create(req.body);
            res.send('O usuário foi salvo na base de dados!');
        } catch (error) {
            console.log(error);
            res.send('Não foi possível salvar o usuário na base de dados');
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