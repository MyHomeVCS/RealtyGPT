import { ESupportedLanguages } from 'src/interfaces';

export const AI_SALUTATION_ARM = `Բարև Ձեզ, ես DefanseGPT-ն եմ, անշարժ գույքի պրոֆեսիոնալ գործակալ։\n Ես կփորձեմ Ձեզ օգտակար լինել, գտնել Ձեր երազանքի բնակարանը:\n Խնդրում եմ նշել, թե ինչ բնակարան է Ձեզ հետաքրքրում: \n ՆՇԵՔ ՀԵՏԵՎՅԱԼ ՊԱՐԱՄԵՏՐԵՐԸ՝\n
 1. Մակերես (ք/մ)\n 2. Սենյակների քանակ\n 3. Հարկ\n 4. Սանհագույցներ\n 5. Պատշգամբներ\n 6. 1 ք/մ արժեք\n 7. Ընդհանուր արժեք`;

export const AI_SALUTATION_RUS = `Здравствуйте, я DefanseGPT, профессиональный агент по недвижимости.\n  Я постараюсь быть Вам полезным в поиске квартиры вашей мечты.\n ПОЖАЛУЙСТА, УКАЖИТЕ СЛЕДУЮЩИЕ ПАРАМЕТРЫ: 
 1. Площадь (кв.м)\n 2. Количество комнат\n 3. Этаж\n 4. Количество ванных комнат\n 5. Балконы\n 6. Стоимость за 1 кв.м\n 7. Общая стоимость`;

export const AI_SALUTATION_END = `Hello, I'm DefanseGPT, a professional real estate agent.\n I will try to be helpful in finding the apartment of Your dreams.\n PLEASE SPECIFY THE FOLLOWING PARAMETERS:\n
 1. Area (sq.m)\n 2. Number of rooms\n 3. Floor\n 4. Number of bathrooms\n 5. Balconies\n 6. Price per 1 sq.m\n 7. Total cost`;

export const AI_SALUTATIONS: Record<ESupportedLanguages, string> = {
  [ESupportedLanguages.armenian]: AI_SALUTATION_ARM,
  [ESupportedLanguages.english]: AI_SALUTATION_END,
  [ESupportedLanguages.russian]: AI_SALUTATION_RUS,
};
