class Regex{
    constructor(){
        this.lineBreak = /\n/g;
        this.questionAnswers = /[A-E*]--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?(--)?/gi;
        this.questions = /\d{1,3}/gi;

    }

    removeLineBreak(text){
        return text.replaceAll(this.lineBreak, '-');
    }



}

module.exports = new Regex();
