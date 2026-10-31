import { ReadingPassage } from '../types/readingAndOral';

export const unseenPassagesData: ReadingPassage[] = [
  {
    id: 'passage-1',
    titleEn: 'Saving Sea Turtles in Mikhmoret',
    titleHe: 'מצילים את צבי הים במכמורת',
    band: 'Band I',
    gradeLevel: 'כיתות ד׳-ה׳ (Grade 4-5)',
    topicHe: 'טבע, בעלי חיים ושמירה על הסביבה',
    estimatedReadTimeMin: 4,
    wordCount: 165,
    paragraphs: [
      {
        paragraphNumber: 1,
        lines: [
          {
            lineNumber: 1,
            text: 'Every year, many green sea turtles swim along the Mediterranean coast of Israel.',
            audioText: 'Every year, many green sea turtles swim along the Mediterranean coast of Israel.'
          },
          {
            lineNumber: 2,
            text: 'Sometimes, strong sea storms and plastic waste hurt these gentle marine animals.',
            audioText: 'Sometimes, strong sea storms and plastic waste hurt these gentle marine animals.'
          },
          {
            lineNumber: 3,
            text: 'When a turtle is injured, caring people call the National Sea Turtle Rescue Center in Mikhmoret.',
            audioText: 'When a turtle is injured, caring people call the National Sea Turtle Rescue Center in Mikhmoret.'
          }
        ]
      },
      {
        paragraphNumber: 2,
        lines: [
          {
            lineNumber: 4,
            text: 'At the rescue center, dedicated veterinarians clean the turtles and give them medicine.',
            audioText: 'At the rescue center, dedicated veterinarians clean the turtles and give them medicine.'
          },
          {
            lineNumber: 5,
            text: 'Volunteers, including Israeli school students, prepare fresh food like green lettuce and fish.',
            audioText: 'Volunteers, including Israeli school students, prepare fresh food like green lettuce and fish.'
          },
          {
            lineNumber: 6,
            text: 'The turtles swim in clean rehabilitation pools until their shells become strong and healthy again.',
            audioText: 'The turtles swim in clean rehabilitation pools until their shells become strong and healthy again.'
          }
        ]
      },
      {
        paragraphNumber: 3,
        lines: [
          {
            lineNumber: 7,
            text: 'The happiest day comes in the summer when fully healed turtles return home.',
            audioText: 'The happiest day comes in the summer when fully healed turtles return home.'
          },
          {
            lineNumber: 8,
            text: 'Children gather on the sandy beach to cheer as the turtles crawl into the blue waves.',
            audioText: 'Children gather on the sandy beach to cheer as the turtles crawl into the blue waves.'
          },
          {
            lineNumber: 9,
            text: 'The center teaches everyone that keeping beaches clean saves wild animal lives.',
            audioText: 'The center teaches everyone that keeping beaches clean saves wild animal lives.'
          }
        ]
      }
    ],
    vocabularyGlossary: [
      { word: 'Turtles', translationHe: 'צבי ים', partOfSpeech: 'noun (plural)', exampleHe: 'צבי ים שוחים בים התיכון.' },
      { word: 'Coast', translationHe: 'חוף / רצועת חוף', partOfSpeech: 'noun', exampleHe: 'רצועת החוף של ישראל.' },
      { word: 'Injured', translationHe: 'פצוע / נפגע', partOfSpeech: 'adjective', exampleHe: 'כאשר הצב פצוע, מטפלים בו.' },
      { word: 'Rescue Center', translationHe: 'מרכז הצלה', partOfSpeech: 'noun phrase', exampleHe: 'מרכז הצלה במכמורת.' },
      { word: 'Veterinarians', translationHe: 'וטרינרים / רופאי חיות', partOfSpeech: 'noun', exampleHe: 'הווטרינרים נותנים תרופות.' },
      { word: 'Healthy', translationHe: 'בריא', partOfSpeech: 'adjective', exampleHe: 'השריון נעשה בריא וחזק שוב.' },
      { word: 'Crawl', translationHe: 'לזחול', partOfSpeech: 'verb', exampleHe: 'הצבים זוחלים אל הגלים.' }
    ],
    questions: [
      {
        id: 'p1-q1',
        questionNumber: 1,
        type: 'multiple_choice',
        questionEn: 'Where do people take injured sea turtles in Israel?',
        questionHe: 'לאן לוקחים צבי ים פצועים בישראל?',
        options: [
          'To the National Sea Turtle Rescue Center in Mikhmoret',
          'To a regular pet store in Tel Aviv',
          'To a deep pool in Jerusalem',
          'To a school garden in Haifa'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [3],
        explanationHe: 'בשורה 3 מצוין במפורש: "people call the National Sea Turtle Rescue Center in Mikhmoret".',
        points: 25
      },
      {
        id: 'p1-q2',
        questionNumber: 2,
        type: 'true_false_evidence',
        questionEn: 'What do student volunteers do at the center? (According to lines 4-6)',
        questionHe: 'מה עושים תלמידים מתנדבים במרכז? (לפי שורות 4-6)',
        options: [
          'They prepare fresh food like lettuce and fish for the turtles',
          'They sell plastic bags on the beach',
          'They drive emergency trucks to the sea',
          'They build new houses for veterinarians'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [5],
        explanationHe: 'שורה 5 מציינת שתלמידים מתנדבים מכינים אוכל טרי כמו חסה ודגים עבור הצבים.',
        points: 25
      },
      {
        id: 'p1-q3',
        questionNumber: 3,
        type: 'vocabulary_context',
        questionEn: 'The word "healed" in line 7 is closest in meaning to:',
        questionHe: 'המילה "healed" בשורה 7 משמעה הקרוב ביותר הוא:',
        options: [
          'Healthy and well again (הבריאו)',
          'Very hungry (רעבים מאוד)',
          'Scared of waves (פוחדים מהגלים)',
          'Lost in the sand (אבודים בחול)'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [6, 7],
        explanationHe: 'ההקשר מראה שבקיץ הצבים שהבריאו ("fully healed") חוזרים לים הפתוח.',
        points: 25
      },
      {
        id: 'p1-q4',
        questionNumber: 4,
        type: 'multiple_choice',
        questionEn: 'What is the main message of the rescue center?',
        questionHe: 'מהו המסר המרכזי של מרכז ההצלה?',
        options: [
          'Keeping beaches clean from plastic saves wild animal lives',
          'Swimming in winter is dangerous for children',
          'Turtles should live in home aquariums',
          'School students should not visit beaches'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [2, 9],
        explanationHe: 'שורה 9 מסכמת: "The center teaches everyone that keeping beaches clean saves wild animal lives".',
        points: 25
      }
    ]
  },
  {
    id: 'passage-2',
    titleEn: 'The Community Garden of Hope',
    titleHe: 'הגינה הקהילתית של התקווה',
    band: 'Band I',
    gradeLevel: 'כיתות ד׳-ה׳ (Grade 4-5)',
    topicHe: 'קהילה, גינון, שיתוף פעולה ומזון בריא',
    estimatedReadTimeMin: 3.5,
    wordCount: 150,
    paragraphs: [
      {
        paragraphNumber: 1,
        lines: [
          {
            lineNumber: 1,
            text: 'Maya is a ten-year-old girl who lives in a quiet neighborhood in Jerusalem.',
            audioText: 'Maya is a ten-year-old girl who lives in a quiet neighborhood in Jerusalem.'
          },
          {
            lineNumber: 2,
            text: 'Last spring, an empty dirty lot near her school was turned into a vibrant community garden.',
            audioText: 'Last spring, an empty dirty lot near her school was turned into a vibrant community garden.'
          },
          {
            lineNumber: 3,
            text: 'Neighbors of all ages came together to plant tomatoes, carrots, and sweet strawberries.',
            audioText: 'Neighbors of all ages came together to plant tomatoes, carrots, and sweet strawberries.'
          }
        ]
      },
      {
        paragraphNumber: 2,
        lines: [
          {
            lineNumber: 4,
            text: 'Every Tuesday afternoon, Maya and her classmates water the green plants with drip irrigation.',
            audioText: 'Every Tuesday afternoon, Maya and her classmates water the green plants with drip irrigation.'
          },
          {
            lineNumber: 5,
            text: 'They also pull out wild weeds and add rich natural compost to the soil.',
            audioText: 'They also pull out wild weeds and add rich natural compost to the soil.'
          },
          {
            lineNumber: 6,
            text: 'Elderly neighbors teach the children ancient gardening secrets and tell stories.',
            audioText: 'Elderly neighbors teach the children ancient gardening secrets and tell stories.'
          }
        ]
      },
      {
        paragraphNumber: 3,
        lines: [
          {
            lineNumber: 7,
            text: 'When the vegetables are ripe, the community shares the harvest fairly.',
            audioText: 'When the vegetables are ripe, the community shares the harvest fairly.'
          },
          {
            lineNumber: 8,
            text: 'The children prepare fresh salad baskets for families who need help.',
            audioText: 'The children prepare fresh salad baskets for families who need help.'
          },
          {
            lineNumber: 9,
            text: 'Maya feels proud because teamwork made their neighborhood greener and friendlier.',
            audioText: 'Maya feels proud because teamwork made their neighborhood greener and friendlier.'
          }
        ]
      }
    ],
    vocabularyGlossary: [
      { word: 'Neighborhood', translationHe: 'שכונה', partOfSpeech: 'noun', exampleHe: 'שכונה שקטה בירושלים.' },
      { word: 'Vibrant', translationHe: 'תוסס / מלא חיים', partOfSpeech: 'adjective', exampleHe: 'גינה קהילתית תוססת.' },
      { word: 'Drip irrigation', translationHe: 'השקיה בטפטוף', partOfSpeech: 'noun phrase', exampleHe: 'המצאה ישראלית להשקיית צמחים.' },
      { word: 'Weeds', translationHe: 'עשבים שוטים', partOfSpeech: 'noun (plural)', exampleHe: 'תולשים עשבים שוטים.' },
      { word: 'Ripe', translationHe: 'בשל / מוכן לקטיף', partOfSpeech: 'adjective', exampleHe: 'כאשר העגבניות בשלות.' },
      { word: 'Harvest', translationHe: 'יבול / קציר', partOfSpeech: 'noun', exampleHe: 'השכונה חולקת את היבול.' },
      { word: 'Teamwork', translationHe: 'עבודת צוות', partOfSpeech: 'noun', exampleHe: 'עבודת צוות הפכה את השכונה לירוקה יותר.' }
    ],
    questions: [
      {
        id: 'p2-q1',
        questionNumber: 1,
        type: 'multiple_choice',
        questionEn: 'What was the garden before neighbors changed it? (Line 2)',
        questionHe: 'מה היה השטח לפני שהשכנים שינו אותו? (שורה 2)',
        options: [
          'An empty, dirty lot near the school',
          'A busy supermarket parking lot',
          'A big swimming pool',
          'A train station platform'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [2],
        explanationHe: 'שורה 2 מציינת: "an empty dirty lot near her school was turned into a vibrant community garden".',
        points: 25
      },
      {
        id: 'p2-q2',
        questionNumber: 2,
        type: 'true_false_evidence',
        questionEn: 'How do Maya and her classmates care for the garden? (Lines 4-5)',
        questionHe: 'כיצד מיה וחבריה לכיתה מטפלים בגינה? (שורות 4-5)',
        options: [
          'They water plants with drip irrigation and pull weeds',
          'They buy vegetables in plastic boxes',
          'They play video games near the flowers',
          'They paint the trees with blue color'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [4, 5],
        explanationHe: 'שורות 4-5 מפרטות: "water the green plants with drip irrigation... pull out wild weeds".',
        points: 25
      },
      {
        id: 'p2-q3',
        questionNumber: 3,
        type: 'multiple_choice',
        questionEn: 'What do the children do with the fresh vegetables when they are ripe?',
        questionHe: 'מה הילדים עושים עם הירקות הטריים כשהם בשלים?',
        options: [
          'They prepare fresh salad baskets for families in need',
          'They throw them away into trash cans',
          'They sell them to expensive restaurants abroad',
          'They feed wild birds only'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [7, 8],
        explanationHe: 'שורה 8 מפרטת: "The children prepare fresh salad baskets for families who need help".',
        points: 25
      },
      {
        id: 'p2-q4',
        questionNumber: 4,
        type: 'vocabulary_context',
        questionEn: 'Why does Maya feel proud at the end of the story?',
        questionHe: 'מדוע מיה מרגישה גאווה בסוף הסיפור?',
        options: [
          'Because teamwork made their neighborhood greener and friendlier',
          'Because she won a monetary prize in a lottery',
          'Because she didn’t have to do any homework',
          'Because she moved to a larger city'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [9],
        explanationHe: 'שורה 9 מסכמת: "Maya feels proud because teamwork made their neighborhood greener and friendlier".',
        points: 25
      }
    ]
  },
  {
    id: 'passage-3',
    titleEn: 'The Solar Bicycle: Young Inventions from the Galilee',
    titleHe: 'אופני השמש: המצאות צעירות מהגליל',
    band: 'Band II',
    gradeLevel: 'כיתות ו׳-ז׳ (Grade 6-7 / Band II)',
    topicHe: 'מדע, טכנולוגיה, אנרגיה ירוקה ופתרון בעיות',
    estimatedReadTimeMin: 4.5,
    wordCount: 190,
    paragraphs: [
      {
        paragraphNumber: 1,
        lines: [
          {
            lineNumber: 1,
            text: 'Rami and Noa are twelve-year-old middle school students from a hilly town in the Galilee.',
            audioText: 'Rami and Noa are twelve-year-old middle school students from a hilly town in the Galilee.'
          },
          {
            lineNumber: 2,
            text: 'Riding a normal bicycle up steep hills was exhausting for many elderly residents.',
            audioText: 'Riding a normal bicycle up steep hills was exhausting for many elderly residents.'
          },
          {
            lineNumber: 3,
            text: 'Instead of complaining, the two young friends decided to build an eco-friendly solution.',
            audioText: 'Instead of complaining, the two young friends decided to build an eco-friendly solution.'
          }
        ]
      },
      {
        paragraphNumber: 2,
        lines: [
          {
            lineNumber: 4,
            text: 'During their science lab class, they recycled an old bicycle and attached a lightweight electric motor.',
            audioText: 'During their science lab class, they recycled an old bicycle and attached a lightweight electric motor.'
          },
          {
            lineNumber: 5,
            text: 'On the front basket and rear rack, they installed flexible mini solar panels.',
            audioText: 'On the front basket and rear rack, they installed flexible mini solar panels.'
          },
          {
            lineNumber: 6,
            text: 'These panels absorb bright Mediterranean sunlight and charge the battery while riding.',
            audioText: 'These panels absorb bright Mediterranean sunlight and charge the battery while riding.'
          }
        ]
      },
      {
        paragraphNumber: 3,
        lines: [
          {
            lineNumber: 7,
            text: 'Their solar bicycle is lighter and cheaper than standard commercial electric bikes.',
            audioText: 'Their solar bicycle is lighter and cheaper than standard commercial electric bikes.'
          },
          {
            lineNumber: 8,
            text: 'Last month, the project won first prize at the National Young Scientists Fair in Haifa.',
            audioText: 'Last month, the project won first prize at the National Young Scientists Fair in Haifa.'
          },
          {
            lineNumber: 9,
            text: 'Rami said: "Smart technology should be simple, green, and helpful for everyone."',
            audioText: 'Rami said: Smart technology should be simple, green, and helpful for everyone.'
          }
        ]
      }
    ],
    vocabularyGlossary: [
      { word: 'Hilly', translationHe: 'הררי / משופע', partOfSpeech: 'adjective', exampleHe: 'עיירה הררית בגליל.' },
      { word: 'Exhausting', translationHe: 'מתיש ומעייף', partOfSpeech: 'adjective', exampleHe: 'לרכוב בעלייה היה מעייף מאוד.' },
      { word: 'Eco-friendly', translationHe: 'ידידותי לסביבה', partOfSpeech: 'adjective', exampleHe: 'פתרון ירוק וידידותי לסביבה.' },
      { word: 'Recycled', translationHe: 'מיחזרו', partOfSpeech: 'verb (past)', exampleHe: 'מיחזרו זוג אופניים ישן.' },
      { word: 'Solar panels', translationHe: 'קולטנים סולאריים / לוחות שמש', partOfSpeech: 'noun phrase', exampleHe: 'קולטים את אור השמש.' },
      { word: 'Absorb', translationHe: 'לקלוט / לספוג', partOfSpeech: 'verb', exampleHe: 'הקולטנים קולטים את אור השמש.' },
      { word: 'Commercial', translationHe: 'מסחרי', partOfSpeech: 'adjective', exampleHe: 'זול יותר מאופניים חשמליים מסחריים.' }
    ],
    questions: [
      {
        id: 'p3-q1',
        questionNumber: 1,
        type: 'multiple_choice',
        questionEn: 'What problem did Rami and Noa want to solve in their town? (Lines 1-3)',
        questionHe: 'איזו בעיה רצו רמי ונועה לפתור בעיירה שלהם? (שורות 1-3)',
        options: [
          'Riding bicycles up steep hills was exhausting for residents',
          'There was no tap water in the school laboratory',
          'The road to Haifa was closed because of snow',
          'They needed a new video camera for art class'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [2],
        explanationHe: 'שורה 2 מסבירה: "Riding a normal bicycle up steep hills was exhausting for many elderly residents".',
        points: 25
      },
      {
        id: 'p3-q2',
        questionNumber: 2,
        type: 'true_false_evidence',
        questionEn: 'How does the bicycle battery get charged? (Line 6)',
        questionHe: 'כיצד נטענת סוללת האופניים? (שורה 6)',
        options: [
          'Flexible solar panels absorb sunlight while riding',
          'Riders have to plug it into petrol generators',
          'The bike only charges during rainy nights',
          'Batteries must be replaced after every single meter'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [5, 6],
        explanationHe: 'שורה 6 מציינת: "These panels absorb bright Mediterranean sunlight and charge the battery while riding".',
        points: 25
      },
      {
        id: 'p3-q3',
        questionNumber: 3,
        type: 'vocabulary_context',
        questionEn: 'In line 7, the bicycle is described as "lighter and cheaper". What grammar rule is this?',
        questionHe: 'בשורה 7 נכתב "lighter and cheaper". איזה כלל דקדוקי מייצגת סיומת זו?',
        options: [
          'Comparative adjectives comparing two things (תארי השוואה עם er)',
          'Past tense regular verbs (פועל בזמן עבר)',
          'Plural nouns (שמות עצם ברבים)',
          'Future continuous verbs (זמן עתיד מתמשך)'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [7],
        explanationHe: 'הסיומת -er (lighter, cheaper) משווה בין האופניים שהמציאו לאופניים חשמליים רגילים: קל יותר וזול יותר.',
        points: 25
      },
      {
        id: 'p3-q4',
        questionNumber: 4,
        type: 'multiple_choice',
        questionEn: 'What happened to their project last month? (Line 8)',
        questionHe: 'מה קרה לפרויקט שלהם בחודש שעבר? (שורה 8)',
        options: [
          'It won first prize at the National Young Scientists Fair in Haifa',
          'The bicycle was stolen from the classroom',
          'The motor stopped working during the first test',
          'They decided to abandon science and play football'
        ],
        correctOptionIndex: 0,
        evidenceLineNumbers: [8],
        explanationHe: 'שורה 8 מציינת: "the project won first prize at the National Young Scientists Fair in Haifa".',
        points: 25
      }
    ]
  }
];
