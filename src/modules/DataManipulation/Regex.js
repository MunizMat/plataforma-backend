class Regex{
    constructor(){
        this.lineBreak = /\n/g;
        this.questionAnswers = /[A-E*]--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?--\d{1,3}\*?(--)?/gi;
        this.questions = /\d{1,3}/gi;
        this.questionText = /^[0-9]{2}\n/gm;

    }

    removeLineBreak(text){
        return text.replaceAll(this.lineBreak, '-');
    }

    removeDots(string){
        return string.replaceAll('.', '');
    }



}

module.exports = new Regex();
