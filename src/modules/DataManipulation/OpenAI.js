require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

class OpenAI{
    constructor(){
        this.config = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        })
        this.openai = new OpenAIApi(this.config);
    }

    async retrieveChatResponse(message){
        const response = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": message}],
            max_tokens: 100,
            temperature: 0.7,
        });
        return response.data.choices[0].message.content;
    }
}

module.exports = OpenAI
