require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



 const tokenController = {
    store: async (req, res) => {
        try {
            const { email, senha } = req.body;
            const user = await User.findOne({ where: { email}});

            // Checando se o usuário realmente existe na base de dados
            if(!user) return res.json({ error: { field: 'email', msg: 'Usuário não existe'}});
            
            const senhaIsCorrect = await bcrypt.compare(senha, user.hashSenha);

            if (!senhaIsCorrect) return res.json({ error : { field: 'senha', msg: 'Senha incorreta'} });

            const token = jwt.sign({ id: user.id}, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION });

            return res.json({email: user.email, token});
        } catch (error) {
            console.log(error);
            res.json('Não funcionou');
        }
    }
}

module.exports = tokenController;