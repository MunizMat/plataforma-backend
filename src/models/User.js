require('dotenv').config();
const { Sequelize, DataTypes, Model, UUIDV1} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV1,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: 'Campo "nome" é obrigatório'
        }
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        validate: {
            notEmpty: {
                msg: 'Campo "email" é obrigatório'
            },
            isEmail: {
                msg: 'Email inválido'
            }
        }
    },
    senha: {
        type: DataTypes.VIRTUAL,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Campo "senha" é obrigatório'
            },
            len: {
                agrs: [6, 20],
                msg: 'A senha deve conter entre 6 e 20 caracteres'
            }
        }
    },
    hashSenha: {
        type: DataTypes.STRING,
    },
    
}, { sequelize });

User.beforeSave(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.senha, 10);
    user.hashSenha = hashedPassword;
});

User.sync();

module.exports = User;
