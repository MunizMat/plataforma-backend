const MoldQuestionData = require('./MoldQuestionData');
const provaData = require('./FormatProvaData');
const axios = require('axios');

class MoldGabarito{
    constructor(){

    }

    async init(){
        const response = await axios.get('http://localhost:3000/provas');
        console.log(response.data);
    }


}

const gabarito = new MoldGabarito();
gabarito.init();

module.exports = MoldGabarito;