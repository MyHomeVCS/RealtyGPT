const {compilePromptFromUserPTextPrompt} = require("../../src/utils/prompt");

const getParamsFromUserTextPrompt = async (text) => {
  const prompt = compilePromptFromUserPTextPrompt(text);


  const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 108,
      }),
    });

   const jsonResponse = await res.json();
   return JSON.stringify(jsonResponse.choices[0])

}

module.exports = {
  getParamsFromUserTextPrompt
}