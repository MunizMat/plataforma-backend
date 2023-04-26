require('dotenv').config();
const openai = require('openai');

class Categorize{
    constructor(input, categories){
        this.input = input,
        this.categories = categories
    }

    async categorizeText(){
        const model = 'text-davinci-002';
        const prompt = `Classifique a seguinte questão de prova em uma das categorias: ['Exatas', 'Humanas']\nQuestão de prova:${this.input}\n\nCategory:`;
        const response = await openai.completions.create({
            engine: model,
            prompt,
            max_tokens: 1,
            n: 1,
            stop: '\n',
        }, { apiKey: process.env.OPENAI_API_KEY });
        console.log(response);
    }
}

const cat = new Categorize('Faça a divisão de 10 por 2', '');
cat.categorizeText();
