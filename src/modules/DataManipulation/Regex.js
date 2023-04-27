class Regex{
    constructor(){
        this.lineBreak = /\n/g;
        this.questionAnswers = /[A-E*]--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?(--)?/gi;

    }

    removeLineBreak(text){
        return text.replaceAll(this.lineBreak, '-');
    }

    findRawQuestionAnswers(text){
        const newText = this.removeLineBreak(text);
        return [...newText.matchAll(this.questionAnswers)];
    }



}

module.exports = new Regex();
