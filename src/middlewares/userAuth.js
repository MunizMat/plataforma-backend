require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    console.log('Passei pelo middleware\n');
    let token = req.headers.authorization;
    token = token.split(' ')[1];
    if (!token) return res.json('É necessário fazer login');

    try {
        const tokenIsValid = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
        console.log(error);
        return res.json('Credenciais inválidas');

    }
    
    next();
}