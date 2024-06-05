const {BASIC_PARAMETERS} = require("../../constants/AI");
const axios = require("axios");

const compilePromptFromUserPTextPrompt = (text) => `
  can you get me the following parameters "${BASIC_PARAMETERS.join(' ,')}" from following prompt "${text}"
`

const getParamsFromUserTextPrompt = async (text) => {
  const prompt = compilePromptFromUserPTextPrompt(text);


  const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 108,
      }),
    });

   return res.json();

}

module.exports = {
  getParamsFromUserTextPrompt
}