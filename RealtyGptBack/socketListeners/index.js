const {getParamsFromUserTextPrompt} = require("../services/gptServices");


const onMessage = async (socket, text) => {
  const result = await getParamsFromUserTextPrompt(text);

  const res = JSON.parse(result).message;

  // content.split()

  console.log('getParamsFromUserTextPrompt', res)
  return res
}


module.exports = {
  onMessage
}

//ես ուզում եմ գնել բնակարան երևանում, մինջև 40000$ արժողությամբ