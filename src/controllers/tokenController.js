const User = require('../models/User');
const bcrypt = require('bcrypt');


 const tokenController = {
    store: async (req, res) => {
        try {
            const { email, senha } = req.body;
            const user = await User.findOne({ where: { email}});

            // Checando se o usuário realmente existe na base de dados
            if(!user) return res.json('Usuário não existe');
            
            const senhaIsCorrect = await bcrypt.compare(senha, user.hashSenha);

            if (!senhaIsCorrect) return res.json('Senha incorreta');

            return res.json('Usuário encontrado');
        } catch (error) {
            console.log(error);
            res.send('Não funcionou');
        }
    }
}

module.exports = tokenController;