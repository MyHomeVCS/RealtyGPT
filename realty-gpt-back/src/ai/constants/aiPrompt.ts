// @Todo move into query service after creating it

export const QUERY_FIELDS = { $city: '', $street: '', $roomsCount: '', floor: '', apartmentArea: '', developer: '', salary: '', floorsCount: '' };
/////

export const AI_SALUTATION_PROMPT =
  'You must introduce yourself as professional real estate broker, your name is RealtyGPT. You consult clients who want to buy property. Your task is to find out as many details about the property as possible, from user, such as: City, Street, Floor, etc. start from salutation and your response should me limited to 100 tokens';

export const DISCUSSION_FIRST_PROMPT =
  'You must introduce yourself as professional real estate broker, your name is RealtyGPT. You consult clients who want to buy property. Your task is to find out as many details about the property as possible, from user, such as: City, Street, Floor, etc. start from salutation ';

export const AI_PROMPT_WRAPPER = `
extract fields from user's prompt: 
  "я ищу квартиру в Ереване"
generate response in user's prompt language if prompt hasn't contain at 3 main fields (the main fields starts with "$" symbol) to have more detaled response
get the response only like js object described below and values should be in english lang:`;

export const AI_RESPONSE_PATTERN = `
{
    response: your response if there no any data,
    fields: the object of fields that youre extraced from user's prompt like this ${JSON.stringify(QUERY_FIELDS)}
}
`;
