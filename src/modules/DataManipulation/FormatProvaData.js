const regex = require('./Regex');
const sampleText = require('./rawPDFText/fuvest2022');
const hugeText = require('./rawPDFText/hugeText');

class FormatProvaData{
    constructor(rawAnswers, rawQuestions){
        this.rawAnswers = rawAnswers;
        this.rawQuestions = rawQuestions;
    }

    show(data){
        console.log(data);
    }

    get rawQuestionsArray(){
        return [...this.rawQuestions.matchAll(regex.questionText)];
    }

    get findRawAnswers(){
        const newText = regex.removeLineBreak(this.rawAnswers);
        return [...newText.matchAll(regex.questionAnswers)];
    }
    
    get findRawQuestions(){
        const newText = regex.removeLineBreak(this.rawQuestions);
        return [...newText.matchAll(regex.questionAnswers)];
    }

    get answersArray(){
        return this.findRawAnswers.map(value => value[0]);
    }

    get answers(){
        const splitAnswerData =  this.answersArray.map(value => value.split('--'));
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

const provaData = new FormatProvaData(sampleText, hugeText);
provaData.show(provaData.rawQuestionsArray);


module.exports = FormatProvaData

