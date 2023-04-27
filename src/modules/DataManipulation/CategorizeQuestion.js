require('dotenv').config();
const OpenAI = require('./OpenAI');
const chatGPT = new OpenAI()
class CategorizeQuestion{
    constructor(questionText){
        this.questionText = questionText;
        this.categories = ['Exatas', 'Humanas'];
        this.subCategories = ['Biologia', 'Matemática', 'Português', 'Literatura', 'História', 'Geografia', 'Química', 'Física'];
    }

    async getQuestionCategory(){
        const category = await chatGPT.retrieveChatResponse(`Categorize the following piece of text (only one category can be selected): ${this.questionText} \nCategories: ${this.categories}`);
        return category;
    }
    async getQuestionSubCategory(){
        const subCategory = await chatGPT.retrieveChatResponse(`Categorize the folloqing piece of text (only one category can be selected): ${this.questionText} \nCategories: ${this.subCategories}`);
        return subCategory;
    }
}

module.exports = CategorizeQuestion;