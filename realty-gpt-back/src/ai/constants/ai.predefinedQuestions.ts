import { ESupportedLanguages } from 'src/interfaces';

export const AI_PREDEFINED_QUESTIONS_LIST = `
1. Ե՞րբ է ավարտվելու շինարարությունը\n
2. Ի՞նչ ենթակառուցվածքներ կան\n
3. ի՞նչ առավելություն ունի Defanse Housing թաղամասը, մյուս թաղամասերի նկատմամբ\n
4. Քա՞նի քառակուսի է ամենամինիմալ բնակարանը\n
5. Հնարավո՞ր է եկամտային հարկով ձեռք բերել բնակարան\n
6. Կարո՞ղ եմ Argo Realty-ից ձեռք բերել բնակարանը\n
7. Կա՞ն հանգստի զոնաներ, այգիներ\n
8. Տարաժամկետ վճարման ի՞նչ պայմաններ ունի Defanse Housing-ը\n
9. Որտե՞ղ կարող եմ մոտենալ և ամրագրել բնակարանը\n
10. Ո՞ր բանկերի հետ է աշխատում Defanse Housing-ը
`;

const AI_PREDEFINED_QUESTIONS_ANSWERS_ARM = {
  1: '31.12.2025 թ նախատեսվում է առաջին թաղամասի 66 բնակելի շենքերի շինավարտը',
  2: 'Ստեղծվելու են դպրոցներ, մանկապարտեզներ, ավելի քան 500քմ մակերեսով բիզնես կենտրոն, մարզահամալիր, \nառևտրի կենտրոն, գերժամանակակից, բազմաֆունկցիոնալ  դիագնոստիկ և ուռուցքաբանության կենտրոններ, \nինչպես նաև 24 հա տարածքով կենտրոնական անտառ պուրակ',
  3: 'ա) Կոմունիկացիոն Ենթակառուցվածքները-ստեղծվում են լավագույն որակի կոմունիկացիոն ենթակառուցվածքներ։ \nԹաղամասն ապահովված է լինելու գազով, Ապարանի մաքուր ջրով, առանձին կոյուղատար համակարգով: \nԿառուցվելու է 250 մեգավատտ հզորության ենթակայան, \nորի դեպքում տեխնիկապես անհնար են լինելու էլեկտրաէներգիայի ընդհատումները\n \n բ) Ճանապարհային Ցանցը-թաղամասում կառուցվում են ներքին ճանապարհային ցանց և արտաքին ճանապարհային ցանցին միացող 5 հանգույցներ՝ \nառնվազն 15 մետր լայնությամբ: \nՄիջթաղամասային եւ արտաքին ճանապարհային ցանցին միացող երթևեկելի ճանապարհներն ավելի քան 100․000 մ² մակերեսով են\n \nգ) Շենքերի Սեյսմակայունությունը-ընկերության համար կարևոր է շենքերի սեյսմակայունությունը։ \nԹաղամասը գտնվում է 200 մ խորությամբ բազալտե շերտի վրա, \nիսկ շենքերը կառուցվում են 1.4 մետրանոց երկաթբետոնյա հիմնային սալերի վրա: \nԳրագետ կոնստրուկտորական լուծումների շնորհիվ սեյսմակայունությունը 9 բալ եւ ավելի է',
  4: 'Նվազագույն քմ-50,77 է առավելագույնը 192,37',
  5: 'Եկամտային հարկից միշտ  կարող են օգտվել, նույնիսկ 2025թ-ից հետո, \nերբ Երևանի բոլոր համայնքներում դուրս գա, քանի որ Դեֆանս Հաուզինգը շինարարական թույլատվությունը ստացել է 2021թ-ին',
  6: 'Ոչ, քանի որ Defanse Housing ընկերության նախագծերի վաճառքը իրականացվում է Defanse Realty-ի կողմից',
  7: '140 հա տարածքով թաղամասում պրեմիում դասի բնակելի շենքերի կառուցապատման մակերեսն ընդամենը 25% է։\nՇինարարության առաջին իսկ օրվանից թաղամասում հիմնվում են շուրջ 24 հա մակերեսով կենտրոնական անտառ-պուրակը՝ Իտալիայից բերված ծառատեսակներով, ինչպես նաև թվով 5 շատրվանային կոմպլեքսներ: \nՇենքերին հարակից տարածքներում և միջբակային հատվածներում ևս կլինեն մոտ 25 հա մակերեսով կանաչապատ գոտիներ՝ ապահովելով որակյալ էկոհամակրգ',
  8: 'Տարաժամկետ վճարման պայմաններն են՝\n ա) Կանխիկ ամբողջական վճարում-100% վճարում, որի դեպքում գործում է 5% զեղչ \nբ) Փուլային կամ տարաժամկետ վճարում 50/45/5 հարաբերակցությամբ',
  9: 'Ամրագրման համար կարող են մոտենալ երկուշաբթի-շաբաթ 11:00-19:00,\nիսկ կիրակի օրերին 11:00-14:30 - Հյուսիսային պողոտա 8 հասցեում գործող գրասենյակ',
  10: 'Համագործակցում ենք Արդշինբանկ ՓԲԸ-ի հետ, նվազագույն կանխավճար 10%, 10-20 տարի մարման ժամկետով',
};

const AI_PREDEFINED_QUESTIONS_ANSWERS_ENG = {
  1: 'The construction of 66 residential buildings in the first neighborhood is planned to be completed by 31.12.2025',
  2: `Schools, kindergartens, a business center with an area of more than 500 sq.m, a sports complex,\n
  a shopping center, modern multifunctional diagnostic and oncology centers,\n
  as well as a central forest park with an area of 24 hectares will be created.`,

  3: `a) Communication infrastructure - a high-quality communication infrastructure is being created.\n
  The neighborhood will be supplied with gas, clean water from Aparan, a separate sewerage system.\n
  A 250-megawatt substation will be built, which will eliminate power outages.\n
\n
  b) Road network - an internal road network and five nodes connecting to the external road network are being built in the neighborhood, with a width of at least 15 meters. \n
  The roads connecting the neighborhood to the external road network have an area of more than 100,000 sq.m.\n\n

  c) Seismic resistance of buildings - the company values the seismic resistance of buildings.\n
  The neighborhood is located on a basalt layer with a depth of 200 m,\n
  buildings are constructed on reinforced concrete foundation slabs with a thickness of 1.4 m.\n
  Due to well-thought-out structural decisions, the seismic resilience is rated at 9 or above.`,

  4: ' The minimum area is 50.77 sq.m, the maximum is 192.37 sq.m.',

  5: `Income tax benefits will be in effect even after 2025, when they will cease to apply in all areas of Yerevan, \n
  as Defanse Housing received a construction permit in 2021.`,

  6: 'No, as the sale of Defаnse Housing projects is carried out by Defаnse Realty.',

  7: `On the territory of the neighborhood with an area of 140 hectares, only 25% is allocated for the construction of premium-class residential buildings.\n
  From the first day of construction, a central forest park with an area of 24 hectares with trees imported from Italy,\n
  as well as five fountain complexes, is being created on the territory of the neighborhood.\n
  In the areas adjacent to the buildings and inter-yard areas, about 25 more hectares of green zones will be created, ensuring a quality ecosystem.`,

  8: `Installment conditions:\n

  a) Full payment in cash - 100% payment, in this case, a 5% discount is provided.\n

  b) Staged payment or installment in the ratio of 50/45/5.`,

  9: `You can make a reservation from Monday to Saturday from 11:00 to 19:00, \n
    and on Sundays from 11:00 to 14:30 at the office located at: Northern Avenue,`,

  10: 'We cooperate with "CJSC Ardshinbank", the minimum down payment is 10%, the repayment period is 10-20 years.',
};

const AI_PREDEFINED_QUESTIONS_ANSWERS_RUS = {
  1: 'Строительство 66 жилых зданий в первом микрорайоне планируется завершить 31.12.2025 г.',
  2: ` Будут созданы школы, детские сады, бизнес-центр площадью более 500 кв.м, спортивный комплекс, \n
   торговый центр, современные многофункциональные диагностический и онкологический центры, \n
   а также центральный лесопарк площадью 24 га`,

  3: `а) Коммуникационная инфраструктура - создается качественная коммуникационная инфраструктура.\n 
      Микрорайон будет обеспечен газом, чистой водой из Апарана, отдельной канализационной системой.\n 
      Будет построена подстанция мощностью 250 мегаватт, что исключит перебои с электроснабжением\n
\n
   б) Дорожная сеть - в микрорайоне строятся внутренняя дорожная сеть и пять узлов, соединяющихся с внешней дорожной сетью, \n
      шириной не менее 15 метров. Дороги, соединяющие микрорайон с внешней дорожной сетью, имеют площадь более 100,000 кв.м.\n
\n
   в) Сейсмостойкость зданий - для компании важна сейсмостойкость зданий. Микрорайон расположен на базальтовом слое глубиной 200 м, \n
      здания строятся на фундаментных плитах из железобетона толщиной 1.4 м. \n
      Благодаря грамотным конструкционным решениям сейсмостойкость составляет 9 баллов и выше`,

  4: 'Минимальная площадь - 50,77 кв.м, максимальная - 192,37 кв.м.',

  5: 'Льготы по подоходному налогу будут действовать даже после 2025 года, когда они прекратят свое действие во всех районах Еревана,\n так как Defanse Housing получил разрешение на строительство в 2021 году',

  6: 'Нет, так как продажа проектов компании Defаnse Housing осуществляется компанией Defаnse Realty',

  7: ' На территории микрорайона площадью 140 га только 25% отведено под застройку жилыми зданиями премиум-класса. \nС первого дня строительства на территории микрорайона создается центральный лесопарк площадью 24 га с деревьями, \n привезенными из Италии, а также пять фонтанных комплексов. \nВ прилегающих к зданиям и междворовых территориях будет создано еще около 25 га зеленых зон, обеспечивающих качественную экосистему',

  8: `Условия рассрочки:\n
   \n
   а) Полная оплата наличными - 100% оплата, в этом случае предоставляется скидка 5%\n
   \n
   б) Поэтапная или рассрочка в соотношении 50/45/5`,

  9: 'Для бронирования можно подойти с понедельника по субботу с 11:00 до 19:00, \nа по воскресеньям с 11:00 до 14:30 в офис по адресу: Северный проспект, 8',

  10: 'Мы сотрудничаем с "ЗАО Ардшинбанк", минимальный первоначальный взнос 10%, срок погашения 10-20 лет',
};

export const AI_PREDEFINED_QUESTIONS_ANSWERS: Record<ESupportedLanguages, Record<number, string>> = {
  [ESupportedLanguages.armenian]: AI_PREDEFINED_QUESTIONS_ANSWERS_ARM,
  [ESupportedLanguages.english]: AI_PREDEFINED_QUESTIONS_ANSWERS_ENG,
  [ESupportedLanguages.russian]: AI_PREDEFINED_QUESTIONS_ANSWERS_RUS,
};
