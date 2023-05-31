import { ChatMessage } from "@/types/ChatMessage";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey : process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

const api = new OpenAIApi(config)

export const openai = {
    generate : async (messages : ChatCompletionRequestMessage[]) => {
        const response = await api.createChatCompletion({
            model : 'gpt-3.5-turbo', // Modelo do Chat
            temperature : 0.6,  // 0-2 - quanto maior o numero mais a resposta é abrangente
            messages  // o contexto da conversa
        })

        console.log(response)
    },
    translateMessages : (messages : ChatMessage[]) => {
        let reqMessages : ChatCompletionRequestMessage[] = []

        for (let i in messages){
            reqMessages.push({
                role: messages[i].author == 'me' ? 'user' : 'assistant',
                content: messages[i].body
            })
        }
        return messages
    }
}