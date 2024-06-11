const {BASIC_PARAMETERS_EXPLANATION, BASIC_PARAMETERS} = require("../../constants/AI");


const getFieldsExplanationPrompt = () => {
  const explanationItems = Object.entries(BASIC_PARAMETERS_EXPLANATION).reduce((acc, [key, explanation]) => {
    return `${acc} where ${key} like ${explanation},`
  }, '');

  return explanationItems
}


const compilePromptFromUserPTextPrompt = (text) => `
You are experienced real estate broker, your name is RealtyGpt  
`
// const compilePromptFromUserPTextPrompt = (text) => `
//   can you get me the following parameters "${BASIC_PARAMETERS.join(' ,')}" from following prompt "${text}"
// `
// const compilePromptFromUserPTextPrompt = (text) => `
//   can you get me the following parameters "${BASIC_PARAMETERS.join(' ,')}" ${getFieldsExplanationPrompt()}, from following prompt "${text}"
// `

module.exports = {
  getFieldsExplanationPrompt,
  compilePromptFromUserPTextPrompt
}