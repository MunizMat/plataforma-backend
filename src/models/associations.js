const Prova = require('./Prova');
const Questao = require('./Questao');
const Simulado = require('./Simulado');
const User = require('./User');
const Gabarito = require('./Gabarito');


Prova.hasMany(Questao);
Prova.hasMany(Simulado);

Questao.belongsTo(Prova);

Gabarito.hasMany(Questao);
Questao.belongsTo(Gabarito);


Prova.hasOne(Gabarito);
Gabarito.belongsTo(Prova);

Simulado.belongsTo(Prova);
Simulado.belongsTo(User);

User.hasMany(Simulado);


