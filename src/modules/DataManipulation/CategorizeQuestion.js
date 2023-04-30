require('dotenv').config();
const OpenAI = require('./OpenAI');
const chatGPT = new OpenAI();

class CategorizeQuestion{
    constructor(questionText = ''){
        this.questionText = questionText;
        this.categories = {
            Exatas: ['Biologia', 'Matemática', 'Química', 'Física',],
            Humanas: ['Português', 'Literatura', 'História', 'Geografia', 'Filosofia', 'Sociologia', 'Língua Estrangeira']
        };
        this.mainCategories = Object.keys(this.categories);
        this.allSubCategories = [...this.categories.Exatas, ...this.categories.Humanas];
    }

    show(data){
        console.log(data);
    }

    async getQuestionCategories(){
        const mainCategory = await chatGPT.retrieveChatResponse(`Categorize the following piece of exam question (only one category can be selected and the returned category must be in the list of provided categories): ${this.questionText} \nCategories: ${this.mainCategories}`);

        const subCategory = await chatGPT.retrieveChatResponse(`Categorize the following piece of exam question (only one category can be selected and the returned category must be in the list of provided categories): ${this.questionText} \nCategories: ${this.categories[mainCategory]}`);

        return { mainCategory: mainCategory.replaceAll('.', ''), subCategory: subCategory.replaceAll('.', '') };
        
    }

}

module.exports = CategorizeQuestion;