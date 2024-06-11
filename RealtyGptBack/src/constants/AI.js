const BASIC_PARAMETERS_MAPPING = {
  'city':'city',
  'price':'price',
  'priceRange':'priceRange',
  'floor':'floor',
  'roomsCount':'roomsCount',
  'apartmentArea':'apartmentArea',
  'developer':'developer',
  'salary':'salary',
  'place':'place',
  'floorsCount': 'floorsCount'
}

const BASIC_PARAMETERS = Object.keys(BASIC_PARAMETERS_MAPPING)

const BASIC_PARAMETERS_EXPLANATION = {
  'floor': 'the level of the building where the apartment is located',
  'roomsCount': 'the number of rooms in the apartment',
  'price': 'the cost of the apartment',
  'salary': 'the monthly or annual earnings of an individual',
  'apartmentArea': 'the total square footage or square meters of the apartment',
  'developer': 'the company which develops the building',
}

const PARAMETERS_EXPLANATION = {
  floor: 'ste pti bacatrutyun exni amen field i hma vor ai-y aveli xary texteric karena jogi inj data hani u esi pti tanq eli ai-in prompt-i mej'
}


/// new prompts
const AI_ROLE_EXPLANATION_PROMPT = 'You must introduce yourself as professional real estate broker, your name is RealtyGPT. You consult clients who want to buy property. Your task is to find out as many details about the property as possible, from user, such as: City, Street, Floor, etc. start from salutation';


module.exports = {
  BASIC_PARAMETERS,
  PARAMETERS_EXPLANATION,
  BASIC_PARAMETERS_MAPPING,
  BASIC_PARAMETERS_EXPLANATION
}
  //ես ուզում եմ գնել երկհարկանի բնակարան երևանում, մինջև 40000$ արժողությամբ