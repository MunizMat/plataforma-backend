const regex = require('./Regex');
const sampleText = require('./rawPDFText/fuvest2022');

class FormatProvaData{
    constructor(rawData){
        this.rawData = rawData;
    }

    get findRawQuestionAnswers(){
        const newText = regex.removeLineBreak(this.rawData);
        return [...newText.matchAll(regex.questionAnswers)];
    }

    get questionAnswersArray(){
        return this.findRawQuestionAnswers.map(value => value[0]);
    }

    get answers(){
        const splitAnswerData =  this.questionAnswersArray.map(value => value.split('--'));
        return splitAnswerData.map(value => {
            return {
                alternativaCorreta: value[0],
                correspondencia: {
                    'V': value[1],
                    'K': value[2],
                    'Q': value[3],
                    'X': value[4],
                    'Z': value[5]
                }
            }
        })
    }


}

module.exports = FormatProvaData
