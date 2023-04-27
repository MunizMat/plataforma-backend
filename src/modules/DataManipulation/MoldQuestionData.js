require('dotenv').config();
const provaData = require('./FormatProvaData');
const CategorizeQuestion = require('./CategorizeQuestion');


class MoldQuestionData{
    constructor(alternativas, object, ProvaId, GabaritoId, questionText){
        this.alternativas = alternativas;
        this.object = object;
        this.ProvaId = ProvaId;
        this.GabaritoId = GabaritoId;
        this.questionText = questionText;
        this.categorize = new CategorizeQuestion(this.questionText);
    }

    async createQuestionMold(){
        const { alternativaCorreta, correspondencia } = this.object;
        return {
            alternativas: this.alternativas,
            alternativaCorreta,
            correspondencia,
            ProvaId: this.ProvaId,
            GabaritoId: this.GabaritoId
        }
    }


}

module.exports = MoldQuestionData;


