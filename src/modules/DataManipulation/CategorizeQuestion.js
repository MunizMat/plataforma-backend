require('dotenv').config();
const OpenAI = require('./OpenAI');
const chatGPT = new OpenAI()
class CategorizeQuestion{
    constructor(questionText){
        this.questionText = questionText;
        this.categories = ['Exatas', 'Humanas'];
        this.subCategories = ['Biologia', 'Matemática', 'Português', 'Literatura', 'História', 'Geografia', 'Química', 'Física', 'Filosofia', 'Sociologia', 'Língua Estrangeira'];
    }

    async getQuestionCategory(){
        const category = await chatGPT.retrieveChatResponse(`Categorize the following piece of exam question (only one category can be selected and the returned category must be in the list of provided categories): ${this.questionText} \nCategories: ${this.categories}`);
        return category;
    }
    async getQuestionSubCategory(){
        const subCategory = await chatGPT.retrieveChatResponse(`Categorize the following piece of exam question (only one category can be selected and the returned category must be in the list of provided categories): ${this.questionText} \nCategories: ${this.subCategories}`);
        return subCategory;
    }
}

module.exports = CategorizeQuestion;