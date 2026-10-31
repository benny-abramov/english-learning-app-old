import { CurriculumModule } from '../types/curriculum';

export const fullCurriculumData: CurriculumModule = {
  id: 'moe-band1-full-suite',
  version: '2.0.0',
  metadata: {
    titleEn: 'Sababa English: Comprehensive Israeli Elementary Curriculum (Band I)',
    titleHe: 'סבבה אנגלית: תכנית הלימודים המלאה לכיתות ד׳-ה׳ (Band I)',
    gradeLevel: '4th-5th',
    ministryBand: 'Band I',
    curriculumDomain: 'Core Israeli Elementary ESL / CEFR A1-A2',
    estimatedMinutes: 90,
    recommendedDevice: 'Tablet Landscape / Desktop',
    authors: 'Ministry of Education Band I Curriculum Consultant & Senior Tech Architect',
    learningObjectives: {
      en: [
        'Master the 4 critical Israeli phonetic hurdles: P vs F, B vs V, short /ɪ/ vs long /iː/, and the interdental "TH" sound.',
        'Overcome Hebrew zero-copula syntax by systematically applying "to be" in Present Simple and Present Progressive.',
        'Apply plural suffixes (-s, -es) and irregular plurals with accurate subject-verb agreement.',
        'Form affirmative, negative, and interrogative sentences from Hebrew prompts with correct LTR mechanics.',
        'Master 70+ high-frequency Ministry of Education Band I foundational words across 6 comprehensive units.'
      ],
      he: [
        'שליטה ב-4 מלכודות ההגייה של ישראלים: P מול F, B מול V, תנועות קצרות וארוכות (ship/sheep), וצליל TH.',
        'התגברות על השמטת פועל עזר בהווה (Zero Copula) בהווה פשוט ובהווה ממושך (Present Progressive).',
        'הוספת סיומות ריבוי (-s, -es) ושמות עצם יוצאי דופן (children, feet) בהתאמה לפועל.',
        'בניית משפטי חיווי, שלילה ושאלות משמאל לימין תוך הקפדה על אותיות רישיות וסימני פיסוק.',
        'שליטה ב-70+ מילות ליבה חיוניות מרשימת Band I של משרד החינוך ב-6 יחידות לימוד מקיפות.'
      ]
    },
    targetLinguisticGaps: [
      {
        gapNameHe: 'פער הצלילים P מול F (אות פ׳ דגושה/רפה)',
        descriptionHe: 'אות עברית אחת לשני צלילים שונים לחלוטין באנגלית.',
        pedagogicalStrategy: 'תרגול זוגות מינימליים (Pan/Fan) והדמיית מנח שפתיים.'
      },
      {
        gapNameHe: 'פער הצלילים B מול V (אות ב׳ דגושה/רפה)',
        descriptionHe: 'האות ב׳ מייצגת גם B וגם V. ישראלים מבלבלים בין Berry (גרגיר) ל-Very (מאוד).',
        pedagogicalStrategy: 'הבחנה בין רטט שפתיים של B לבין זרימת שיניים-שפה של V.'
      },
      {
        gapNameHe: 'השמטת פועל עזר (Zero Copula Trap)',
        descriptionHe: 'בעברית אין פועל הווה ("הוא מורה", "אנחנו שמחים"). באנגלית חובה am/is/are.',
        pedagogicalStrategy: 'סימולטור טכנאי הברגים המחייב חיבור בורג פועל לכל משפט.'
      },
      {
        gapNameHe: 'התנועות הקצרות לעומת ניקוד עברי (Ship vs Sheep)',
        descriptionHe: 'עברית מסתמכת על ניקוד חטוף וחיריק פשוט, ומתקשה בהבחנה בין /ɪ/ ל-/iː/.',
        pedagogicalStrategy: 'זיהוי חזותי ושמיעתי של אורך התנועה במשחקי חילוץ.'
      }
    ]
  },

  units: [
    // ==========================================
    // UNIT 1: P/F Phonetics & Verb "To Be"
    // ==========================================
    {
      id: 'unit-1',
      unitNumber: 1,
      titleEn: 'Sound & Sentence Detective',
      titleHe: 'בלש הצלילים והמשפטים',
      themeHe: 'אותיות P ו-F ופועל העזר To Be בהווה',
      descriptionHe: 'נלמד להבדיל בין פּ דגושה לפֿ רפה, ונחבר את פועל העזר החסר למשפטים!',
      badgeIcon: 'Search',
      xpReward: 150,
      phonicsGapName: 'P vs F Minimal Pairs',
      grammarFocusName: 'Present Simple "To Be" (am / is / are)',
      phonicsExercises: [
        {
          id: 'u1-p1',
          type: 'phonics_minimal_pair',
          titleHe: 'מחבת (Pan) או מאוורר (Fan)?',
          instructionHe: 'האזינו למילה ובחרו את האות והמשמעות הנכונה:',
          targetLetter: 'P',
          distractorLetter: 'F',
          targetWord: {
            id: 'w-pan',
            letter: 'P',
            word: 'Pan',
            ipa: '/pæn/',
            hebrewTranslation: 'מחבת',
            audioText: 'pan',
            hebrewLetterEquivalent: 'פּ (דגושה)',
            exampleSentence: 'The pan is hot.'
          },
          distractorWord: {
            id: 'w-fan',
            letter: 'F',
            word: 'Fan',
            ipa: '/fæn/',
            hebrewTranslation: 'מאוורר',
            audioText: 'fan',
            hebrewLetterEquivalent: 'פֿ (רפה)',
            exampleSentence: 'Turn on the fan.'
          },
          hebrewHint: 'שפתיים נסגרות חזק ומתפרצות = P (Pan)!',
          articulationGuide: {
            mouthShape: 'lips_closed_pop',
            soundNameEn: '/p/ Bilabial Plosive',
            soundNameHe: 'צליל P: פיצוץ שפתיים',
            hebrewRule: 'השפתיים נצמדות חזק ומשחררות אוויר בבת אחת.',
            mnemonicHe: 'P כמו פופקורן שקופץ!',
            articulationCueEn: 'Close lips tightly, pop open.'
          },
          explanationHe: 'מעולה! Pan היא מחבת ב-P. המילה Fan היא מאוורר ב-F.'
        },
        {
          id: 'u1-p2',
          type: 'phonics_minimal_pair',
          titleHe: 'תאנה מתוקה (Fig) או חזיר (Pig)?',
          instructionHe: 'הקשיבו: האם נשבה רוח עדינה או נקישת שפתיים?',
          targetLetter: 'F',
          distractorLetter: 'P',
          targetWord: {
            id: 'w-fig',
            letter: 'F',
            word: 'Fig',
            ipa: '/fɪɡ/',
            hebrewTranslation: 'תאנה',
            audioText: 'fig',
            hebrewLetterEquivalent: 'פֿ (רפה)',
            exampleSentence: 'I like to eat a sweet fig.'
          },
          distractorWord: {
            id: 'w-pig',
            letter: 'P',
            word: 'Pig',
            ipa: '/pɪɡ/',
            hebrewTranslation: 'חזיר',
            audioText: 'pig',
            hebrewLetterEquivalent: 'פּ (דגושה)',
            exampleSentence: 'The pig plays in the mud.'
          },
          hebrewHint: 'שיניים על שפה תחתונה עם רוח = האות F (Fig)!',
          articulationGuide: {
            mouthShape: 'teeth_on_lip_air',
            soundNameEn: '/f/ Labiodental Fricative',
            soundNameHe: 'צליל F: רוח שיניים',
            hebrewRule: 'השיניים העליונות נוגעות בשפה התחתונה.',
            mnemonicHe: 'F כמו רוח קרירה: פֿפֿפֿ...',
            articulationCueEn: 'Top teeth touch lower lip with air flow.'
          },
          explanationHe: 'מצוין! Fig (תאנה) מתחילה ב-F עם שיניים על השפה.'
        },
        {
          id: 'u1-p3',
          type: 'phonics_minimal_pair',
          titleHe: 'פארק ירוק (Park) או מזלג (Fork)?',
          instructionHe: 'האזינו לצליל הפותח של המילה:',
          targetLetter: 'P',
          distractorLetter: 'F',
          targetWord: {
            id: 'w-park',
            letter: 'P',
            word: 'Park',
            ipa: '/pɑːrk/',
            hebrewTranslation: 'פארק / גן משחקים',
            audioText: 'park',
            hebrewLetterEquivalent: 'פּ (דגושה)',
            exampleSentence: 'We run in the park.'
          },
          distractorWord: {
            id: 'w-fork',
            letter: 'F',
            word: 'Fork',
            ipa: '/fɔːrk/',
            hebrewTranslation: 'מזלג',
            audioText: 'fork',
            hebrewLetterEquivalent: 'פֿ (רפה)',
            exampleSentence: 'I eat with a fork.'
          },
          hebrewHint: 'צליל פותח בשפתיים צמודות = P.',
          articulationGuide: {
            mouthShape: 'lips_closed_pop',
            soundNameEn: '/p/ Sound',
            soundNameHe: 'צליל P',
            hebrewRule: 'שפתיים נסגרות ומתפרצות.',
            mnemonicHe: 'P כמו Park ו-Pizza!',
            articulationCueEn: 'Lips snap open.'
          },
          explanationHe: 'מדויק! Park מתחיל ב-P. המילה Fork מתחילה ב-F.'
        },
        {
          id: 'u1-p4',
          type: 'phonics_minimal_pair',
          titleHe: 'למלא כוס (Fill) או גלולה (Pill)?',
          instructionHe: 'הקשיבו היטב לפעולה שנאמרת:',
          targetLetter: 'F',
          distractorLetter: 'P',
          targetWord: {
            id: 'w-fill',
            letter: 'F',
            word: 'Fill',
            ipa: '/fɪl/',
            hebrewTranslation: 'למלא',
            audioText: 'fill',
            hebrewLetterEquivalent: 'פֿ (רפה)',
            exampleSentence: 'Fill the cup with milk.'
          },
          distractorWord: {
            id: 'w-pill',
            letter: 'P',
            word: 'Pill',
            ipa: '/pɪl/',
            hebrewTranslation: 'גלולה / כדור תרופה',
            audioText: 'pill',
            hebrewLetterEquivalent: 'פּ (דגושה)',
            exampleSentence: 'Take the medicine pill.'
          },
          hebrewHint: 'רוח רציפה בין השיניים לשפה = F.',
          articulationGuide: {
            mouthShape: 'teeth_on_lip_air',
            soundNameEn: '/f/ Sound',
            soundNameHe: 'צליל F',
            hebrewRule: 'השיניים על השפה מייצרות F.',
            mnemonicHe: 'F כמו Fill ו-Fish!',
            articulationCueEn: 'Continuous air release.'
          },
          explanationHe: 'מעולה! Fill זה למלא (באות F).'
        }
      ],
      verbExercises: [
        {
          id: 'u1-v1',
          hebrewPromptSentence: 'אני תלמיד בכיתה ה׳.',
          subject: 'I',
          subjectType: 'first_singular',
          baseTemplateBefore: 'I',
          baseTemplateAfter: 'a student in fifth grade.',
          correctAnswer: 'am',
          options: ['am', 'is', 'are'],
          hebrewContrastLesson: 'בעברית אין פועל ("אני תלמיד"). באנגלית חובה I AM a student!',
          fullSentenceEn: 'I am a student in fifth grade.',
          audioText: 'I am a student in fifth grade.'
        },
        {
          id: 'u1-v2',
          hebrewPromptSentence: 'הכלב מהיר מאוד.',
          subject: 'The dog',
          subjectType: 'third_singular',
          baseTemplateBefore: 'The dog',
          baseTemplateAfter: 'very fast.',
          correctAnswer: 'is',
          options: ['is', 'are', 'am'],
          hebrewContrastLesson: 'הכלב (The dog) הוא יחיד (He/It). לכן מחברים לו את הבורג IS!',
          fullSentenceEn: 'The dog is very fast.',
          audioText: 'The dog is very fast.'
        },
        {
          id: 'u1-v3',
          hebrewPromptSentence: 'הילדים בפארק עכשיו.',
          subject: 'The children',
          subjectType: 'plural_or_you',
          baseTemplateBefore: 'The children',
          baseTemplateAfter: 'in the park right now.',
          correctAnswer: 'are',
          options: ['are', 'is', 'am'],
          hebrewContrastLesson: 'Children הם ילדים ברבים (They), לכן בוחרים ב-ARE!',
          fullSentenceEn: 'The children are in the park right now.',
          audioText: 'The children are in the park right now.'
        },
        {
          id: 'u1-v4',
          hebrewPromptSentence: 'החתול לא עייף היום.',
          subject: 'The cat',
          subjectType: 'third_singular',
          baseTemplateBefore: 'The cat',
          baseTemplateAfter: 'tired today.',
          correctAnswer: "isn't",
          options: ["isn't", "aren't", 'am not'],
          hebrewContrastLesson: 'בשלילה של יחיד (It/The cat) משתמשים ב-is not או isn\'t!',
          fullSentenceEn: "The cat isn't tired today.",
          audioText: "The cat isn't tired today.",
          isNegative: true
        }
      ],
      sentenceExercises: [
        {
          id: 'u1-s1',
          hebrewPromptSentence: 'החתול שלי חום ולבן.',
          targetSentenceTokens: ['My', 'cat', 'is', 'brown', 'and', 'white', '.'],
          scrambledTokens: [
            { id: 't1', text: 'cat' },
            { id: 't2', text: 'My' },
            { id: 't3', text: 'is' },
            { id: 't4', text: 'and' },
            { id: 't5', text: 'brown' },
            { id: 't6', text: 'white' },
            { id: 't7', text: '.', isPunctuation: true },
            { id: 't8', text: 'are', isDistractor: true }
          ],
          grammarFocus: 'to_be_copula',
          capitalizationTipHe: 'המילה הראשונה היא My עם אות M גדולה!',
          ruleExplanationHe: 'בעברית אומרים "החתול שלי חום", באנגלית חובה: My cat IS brown!',
          audioFullSentence: 'My cat is brown and white.'
        },
        {
          id: 'u1-s2',
          hebrewPromptSentence: 'אנחנו משחקים בפארק כל יום.',
          targetSentenceTokens: ['We', 'play', 'in', 'the', 'park', 'every', 'day', '.'],
          scrambledTokens: [
            { id: 't1', text: 'park' },
            { id: 't2', text: 'We' },
            { id: 't3', text: 'play' },
            { id: 't4', text: 'in' },
            { id: 't5', text: 'the' },
            { id: 't6', text: 'every' },
            { id: 't7', text: 'day' },
            { id: 't8', text: '.', isPunctuation: true },
            { id: 't9', text: 'plays', isDistractor: true }
          ],
          grammarFocus: 'p_f_phonics',
          capitalizationTipHe: 'אות W גדולה בראש המשפט: We.',
          ruleExplanationHe: 'המילה park נכתבת באות P (ולא F!). בנוסף, עם We הפועל נשאר play.',
          audioFullSentence: 'We play in the park every day.'
        }
      ],
      suffixItems: [
        { id: 'suf-1', baseWord: 'play', targetSuffix: '-s', fullWord: 'plays', hebrewMeaning: 'משחק (הוא/היא)', ruleHintHe: 'מוסיפים s עם he/she/it' },
        { id: 'suf-2', baseWord: 'eat', targetSuffix: '-s', fullWord: 'eats', hebrewMeaning: 'אוכל (יחיד)', ruleHintHe: 'תוספת s ליחיד בהווה' }
      ],
      vocabulary: [
        { id: 'v1', word: 'Family', partOfSpeech: 'noun', hebrewTranslation: 'משפחה', ipa: '/ˈfæməli/', phoneticTrap: 'F', hebrewPhoneticTip: 'מתחיל ב-F (שיניים על שפה).', exampleSentenceEn: 'I love my family.', exampleSentenceHe: 'אני אוהב את המשפחה שלי.', band: 'Band I', category: 'משפחה' },
        { id: 'v2', word: 'Park', partOfSpeech: 'noun', hebrewTranslation: 'פארק / גן ציבורי', ipa: '/pɑːrk/', phoneticTrap: 'P', hebrewPhoneticTip: 'מתחיל ב-P (שפתיים נסגרות).', exampleSentenceEn: 'Let us run to the park.', exampleSentenceHe: 'בואו נרוץ לפארק.', band: 'Band I', category: 'מקומות' },
        { id: 'v3', word: 'Friend', partOfSpeech: 'noun', hebrewTranslation: 'חבר / חברה', ipa: '/frend/', phoneticTrap: 'F', hebrewPhoneticTip: 'מתחיל באות F (נשיפה רצופה).', exampleSentenceEn: 'Maya is my best friend.', exampleSentenceHe: 'מאיה היא החברה הכי טובה שלי.', band: 'Band I', category: 'אנשים' },
        { id: 'v4', word: 'Happy', partOfSpeech: 'adjective', hebrewTranslation: 'שמח / מאושר', ipa: '/ˈhæpi/', phoneticTrap: 'P', hebrewPhoneticTip: 'אות P כפולה באמצע (פיצוץ שפתיים).', exampleSentenceEn: 'I am happy today.', exampleSentenceHe: 'אני שמח היום.', band: 'Band I', category: 'רגשות' },
        { id: 'v1_5', word: 'Pencil', partOfSpeech: 'noun', hebrewTranslation: 'עיפרון', ipa: '/ˈpensəl/', phoneticTrap: 'P', hebrewPhoneticTip: 'מתחיל ב-P חזקה.', exampleSentenceEn: 'I write with a yellow pencil.', exampleSentenceHe: 'אני כותב בעיפרון צהוב.', band: 'Band I', category: 'בית ספר' },
        { id: 'v1_6', word: 'Picture', partOfSpeech: 'noun', hebrewTranslation: 'תמונה / ציור', ipa: '/ˈpɪktʃər/', phoneticTrap: 'P', hebrewPhoneticTip: 'P פותחת ותנועת i קצרה.', exampleSentenceEn: 'Look at this beautiful picture.', exampleSentenceHe: 'הביטו בתמונה היפה הזו.', band: 'Band I', category: 'בית ספר' },
        { id: 'v1_7', word: 'Father', partOfSpeech: 'noun', hebrewTranslation: 'אבא', ipa: '/ˈfɑːðər/', phoneticTrap: 'F', hebrewPhoneticTip: 'מתחיל ב-F ומסתיים ב-TH.', exampleSentenceEn: 'My father is a doctor.', exampleSentenceHe: 'אבא שלי הוא רופא.', band: 'Band I', category: 'משפחה' },
        { id: 'v1_8', word: 'Flower', partOfSpeech: 'noun', hebrewTranslation: 'פרח', ipa: '/ˈflaʊər/', phoneticTrap: 'F', hebrewPhoneticTip: 'צליל FL פותח.', exampleSentenceEn: 'The red flower smells good.', exampleSentenceHe: 'הפרח האדום מריח נהדר.', band: 'Band I', category: 'טבע' },
        { id: 'v1_9', word: 'Play', partOfSpeech: 'verb', hebrewTranslation: 'לשחק / לנגן', ipa: '/pleɪ/', phoneticTrap: 'P', hebrewPhoneticTip: 'שפתיים נצמדות ומתפרצות.', exampleSentenceEn: 'We play games together.', exampleSentenceHe: 'אנחנו משחקים במשחקים יחד.', band: 'Band I', category: 'פעולות' },
        { id: 'v1_10', word: 'Food', partOfSpeech: 'noun', hebrewTranslation: 'אוכל / מזון', ipa: '/fuːd/', phoneticTrap: 'F', hebrewPhoneticTip: 'מתחיל ב-F ותנועת oo ארוכה.', exampleSentenceEn: 'Healthy food gives energy.', exampleSentenceHe: 'אוכל בריא מעניק אנרגיה.', band: 'Band I', category: 'אוכל' },
        { id: 'v1_11', word: 'People', partOfSpeech: 'noun', hebrewTranslation: 'אנשים', ipa: '/ˈpiːpəl/', phoneticTrap: 'P', hebrewPhoneticTip: 'שתי אותיות P במילה אחת!', exampleSentenceEn: 'Many people live in the city.', exampleSentenceHe: 'אנשים רבים גרים בעיר.', band: 'Band I', category: 'אנשים' },
        { id: 'v1_12', word: 'Fast', partOfSpeech: 'adjective', hebrewTranslation: 'מהיר', ipa: '/fæst/', phoneticTrap: 'F', hebrewPhoneticTip: 'נשיפת F שיניים-שפה.', exampleSentenceEn: 'The lion runs very fast.', exampleSentenceHe: 'האריה רץ מהר מאוד.', band: 'Band I', category: 'תכונות' }
      ]
    },

    // ==========================================
    // UNIT 2: B/V Phonetics & Present Progressive
    // ==========================================
    {
      id: 'unit-2',
      unitNumber: 2,
      titleEn: 'The Action Station & B/V Lab',
      titleHe: 'תחנת הפעולה והצלילים B ו-V',
      themeHe: 'הבחנה בין צליל B ל-V והווה ממושך (Present Progressive: -ing)',
      descriptionHe: 'איך מבדילים בין גרגר יער (Berry) למילה "מאוד" (Very)? ואיך מרכיבים פועל שקורה ממש עכשיו!',
      badgeIcon: 'Zap',
      xpReward: 200,
      phonicsGapName: 'B vs V Minimal Pairs',
      grammarFocusName: 'Present Progressive (am/is/are + verb-ing)',
      phonicsExercises: [
        {
          id: 'u2-p1',
          type: 'phonics_minimal_pair',
          titleHe: 'גרגר יער (Berry) או המילה מאוד (Very)?',
          instructionHe: 'האזינו לקול: האם שמעתם שפתיים שרוטטות (B) או שיניים על שפה (V)?',
          targetLetter: 'B',
          distractorLetter: 'V',
          targetWord: {
            id: 'w-berry',
            letter: 'B',
            word: 'Berry',
            ipa: '/ˈberi/',
            hebrewTranslation: 'גרגר יער / תות',
            audioText: 'berry',
            hebrewLetterEquivalent: 'בּ (דגושה)',
            exampleSentence: 'I eat a sweet blue berry.'
          },
          distractorWord: {
            id: 'w-very',
            letter: 'V',
            word: 'Very',
            ipa: '/ˈveri/',
            hebrewTranslation: 'מאוד',
            audioText: 'very',
            hebrewLetterEquivalent: 'בֿ (רפה)',
            exampleSentence: 'Thank you very much.'
          },
          hebrewHint: 'האות B דורשת שתי שפתיים צמודות עם רטט קולי: בַּ!',
          articulationGuide: {
            mouthShape: 'lips_vibrate_b',
            soundNameEn: '/b/ Voiced Bilabial Stop',
            soundNameHe: 'צליל B: שפתיים ורטט קולי',
            hebrewRule: 'השפתיים נסגרות עם רטט במיתרי הקול: בּ!',
            mnemonicHe: 'B כמו Ball ו-Banana!',
            articulationCueEn: 'Lips vibrate together with voice.'
          },
          explanationHe: 'כל הכבוד! Berry הוא גרגיר יער עם B. המילה Very (מאוד) נכתבת ב-V.'
        },
        {
          id: 'u2-p2',
          type: 'phonics_minimal_pair',
          titleHe: 'עטלף (Bat) או גיגית מים (Vat)?',
          instructionHe: 'הקשיבו לצליל: מה נאמר כאן?',
          targetLetter: 'B',
          distractorLetter: 'V',
          targetWord: {
            id: 'w-bat',
            letter: 'B',
            word: 'Bat',
            ipa: '/bæt/',
            hebrewTranslation: 'עטלף / מחבט',
            audioText: 'bat',
            hebrewLetterEquivalent: 'בּ (דגושה)',
            exampleSentence: 'The bat flies in the night.'
          },
          distractorWord: {
            id: 'w-vat',
            letter: 'V',
            word: 'Vat',
            ipa: '/væt/',
            hebrewTranslation: 'גיגית / חבית גדולה',
            audioText: 'vat',
            hebrewLetterEquivalent: 'בֿ (רפה)',
            exampleSentence: 'A vat of oil.'
          },
          hebrewHint: 'צליל B מתחיל בהצמדת שתי השפתיים יחד.',
          articulationGuide: {
            mouthShape: 'lips_vibrate_b',
            soundNameEn: '/b/ Sound',
            soundNameHe: 'צליל B',
            hebrewRule: 'שפתיים נצמדות חזק.',
            mnemonicHe: 'B כמו Bat ו-Book!',
            articulationCueEn: 'Firm lip closure.'
          },
          explanationHe: 'מדויק! Bat (עטלף ומחבט בייסבול) מתחיל ב-B!'
        },
        {
          id: 'u2-p3',
          type: 'phonics_minimal_pair',
          titleHe: 'הטוב ביותר (Best) או אפוד (Vest)?',
          instructionHe: 'האזינו היטב: Best או Vest?',
          targetLetter: 'V',
          distractorLetter: 'B',
          targetWord: {
            id: 'w-vest',
            letter: 'V',
            word: 'Vest',
            ipa: '/vest/',
            hebrewTranslation: 'אפוד / וסט',
            audioText: 'vest',
            hebrewLetterEquivalent: 'ו / בֿ רפה',
            exampleSentence: 'Wear a yellow safety vest.'
          },
          distractorWord: {
            id: 'w-best',
            letter: 'B',
            word: 'Best',
            ipa: '/best/',
            hebrewTranslation: 'הכי טוב',
            audioText: 'best',
            hebrewLetterEquivalent: 'בּ (דגושה)',
            exampleSentence: 'You are the best.'
          },
          hebrewHint: 'שיניים נוגעות בשפה התחתונה עם רטט = האות V!',
          articulationGuide: {
            mouthShape: 'teeth_on_lip_air',
            soundNameEn: '/v/ Voiced Fricative',
            soundNameHe: 'צליל V: שיניים ורטט',
            hebrewRule: 'שיניים עליונות על שפה תחתונה עם רטט קולי: ו/בֿ.',
            mnemonicHe: 'V כמו Video ו-Van!',
            articulationCueEn: 'Teeth on lip with buzzing voice.'
          },
          explanationHe: 'מעולה! Vest (אפוד) מתחיל ב-V. המילה Best מתחילה ב-B.'
        }
      ],
      verbExercises: [
        {
          id: 'u2-v1',
          hebrewPromptSentence: 'הילד רץ עכשיו.',
          subject: 'The boy',
          subjectType: 'third_singular',
          baseTemplateBefore: 'The boy',
          baseTemplateAfter: 'right now.',
          correctAnswer: 'is running',
          options: ['is running', 'are running', 'running'],
          hebrewContrastLesson: 'בהווה ממושך חובה שני חלקים: פועל to be (is) ועוד פועל עם -ing!',
          fullSentenceEn: 'The boy is running right now.',
          audioText: 'The boy is running right now.'
        },
        {
          id: 'u2-v2',
          hebrewPromptSentence: 'אנחנו אוכלים פיצה כרגע.',
          subject: 'We',
          subjectType: 'plural_or_you',
          baseTemplateBefore: 'We',
          baseTemplateAfter: 'delicious pizza at the moment.',
          correctAnswer: 'are eating',
          options: ['are eating', 'is eating', 'eat'],
          hebrewContrastLesson: 'עם We חובה להשתמש ב-ARE eating (לא is eating!).',
          fullSentenceEn: 'We are eating delicious pizza at the moment.',
          audioText: 'We are eating delicious pizza at the moment.'
        },
        {
          id: 'u2-v3',
          hebrewPromptSentence: 'אני קורא ספר מרתק.',
          subject: 'I',
          subjectType: 'first_singular',
          baseTemplateBefore: 'I',
          baseTemplateAfter: 'a great book.',
          correctAnswer: 'am reading',
          options: ['am reading', 'is reading', 'reading'],
          hebrewContrastLesson: 'עם I מחברים תמיד am reading!',
          fullSentenceEn: 'I am reading a great book.',
          audioText: 'I am reading a great book.'
        }
      ],
      sentenceExercises: [
        {
          id: 'u2-s1',
          hebrewPromptSentence: 'מאיה שוחה בבריכה עכשיו.',
          targetSentenceTokens: ['Maya', 'is', 'swimming', 'in', 'the', 'pool', 'now', '.'],
          scrambledTokens: [
            { id: 't1', text: 'Maya' },
            { id: 't2', text: 'swimming' },
            { id: 't3', text: 'is' },
            { id: 't4', text: 'in' },
            { id: 't5', text: 'the' },
            { id: 't6', text: 'pool' },
            { id: 't7', text: 'now' },
            { id: 't8', text: '.', isPunctuation: true },
            { id: 't9', text: 'are', isDistractor: true }
          ],
          grammarFocus: 'present_progressive',
          capitalizationTipHe: 'שם פרטי (Maya) נפתח תמיד באות גדולה!',
          ruleExplanationHe: 'Maya היא יחידה (She), לכן: Maya is swimming.',
          audioFullSentence: 'Maya is swimming in the pool now.'
        },
        {
          id: 'u2-s2',
          hebrewPromptSentence: 'הציפורים שרות בעץ.',
          targetSentenceTokens: ['The', 'birds', 'are', 'singing', 'in', 'the', 'tree', '.'],
          scrambledTokens: [
            { id: 't1', text: 'The' },
            { id: 't2', text: 'birds' },
            { id: 't3', text: 'are' },
            { id: 't4', text: 'singing' },
            { id: 't5', text: 'in' },
            { id: 't6', text: 'the' },
            { id: 't7', text: 'tree' },
            { id: 't8', text: '.', isPunctuation: true },
            { id: 't9', text: 'is', isDistractor: true }
          ],
          grammarFocus: 'present_progressive',
          capitalizationTipHe: 'אות T גדולה ב-The בראש המשפט.',
          ruleExplanationHe: 'הציפורים ברבים (birds) מקבלות ARE singing.',
          audioFullSentence: 'The birds are singing in the tree.'
        }
      ],
      suffixItems: [
        { id: 'suf-3', baseWord: 'run', targetSuffix: '-ing', fullWord: 'running', hebrewMeaning: 'רץ עכשיו', ruleHintHe: 'הכפלת אות אחרונה לפני -ing' },
        { id: 'suf-4', baseWord: 'jump', targetSuffix: '-ing', fullWord: 'jumping', hebrewMeaning: 'קופץ עכשיו', ruleHintHe: 'תוספת -ing פשוטה' },
        { id: 'suf-5', baseWord: 'swim', targetSuffix: '-ing', fullWord: 'swimming', hebrewMeaning: 'שוחה עכשיו', ruleHintHe: 'הכפלת m לפני -ing' }
      ],
      vocabulary: [
        { id: 'v5', word: 'Banana', partOfSpeech: 'noun', hebrewTranslation: 'בננה', ipa: '/bəˈnænə/', phoneticTrap: 'B', hebrewPhoneticTip: 'אות B חזקה עם שתי שפתיים.', exampleSentenceEn: 'The monkey eats a sweet banana.', exampleSentenceHe: 'הקוף אוכל בננה מתוקה.', band: 'Band I', category: 'אוכל' },
        { id: 'v6', word: 'Very', partOfSpeech: 'adjective', hebrewTranslation: 'מאוד', ipa: '/ˈveri/', phoneticTrap: 'V', hebrewPhoneticTip: 'מתחיל באות V (שיניים על שפה תחתונה).', exampleSentenceEn: 'It is very cold outside.', exampleSentenceHe: 'קר מאוד בחוץ.', band: 'Band I', category: 'תכונות' },
        { id: 'v7', word: 'Run', partOfSpeech: 'verb', hebrewTranslation: 'לרוץ', ipa: '/rʌn/', exampleSentenceEn: 'The children run fast in the yard.', exampleSentenceHe: 'הילדים רצים מהר בחצר.', band: 'Band I', category: 'פעולות' },
        { id: 'v8', word: 'Read', partOfSpeech: 'verb', hebrewTranslation: 'לקרוא', ipa: '/riːd/', exampleSentenceEn: 'I read interesting English stories.', exampleSentenceHe: 'אני קורא סיפורים מעניינים באנגלית.', band: 'Band I', category: 'פעולות' },
        { id: 'v2_9', word: 'Brother', partOfSpeech: 'noun', hebrewTranslation: 'אח', ipa: '/ˈbrʌðər/', phoneticTrap: 'B', hebrewPhoneticTip: 'מתחיל ב-B רטט שפתיים.', exampleSentenceEn: 'My brother plays football.', exampleSentenceHe: 'אחי משחק כדורגל.', band: 'Band I', category: 'משפחה' },
        { id: 'v2_10', word: 'Boy', partOfSpeech: 'noun', hebrewTranslation: 'ילד / נער', ipa: '/bɔɪ/', phoneticTrap: 'B', hebrewPhoneticTip: 'B פותחת חזקה.', exampleSentenceEn: 'The boy is singing a song.', exampleSentenceHe: 'הילד שר שיר.', band: 'Band I', category: 'אנשים' },
        { id: 'v2_11', word: 'Bird', partOfSpeech: 'noun', hebrewTranslation: 'ציפור', ipa: '/bɜːrd/', phoneticTrap: 'B', hebrewPhoneticTip: 'B פותחת רטט שפתיים.', exampleSentenceEn: 'The blue bird flies high.', exampleSentenceHe: 'הציפור הכחולה עפה גבוה.', band: 'Band I', category: 'חיות' },
        { id: 'v2_12', word: 'Blue', partOfSpeech: 'adjective', hebrewTranslation: 'כחול', ipa: '/bluː/', phoneticTrap: 'B', hebrewPhoneticTip: 'צליל BL פותח.', exampleSentenceEn: 'The sky is clear and blue.', exampleSentenceHe: 'השמיים בהירים וכחולים.', band: 'Band I', category: 'צבעים' },
        { id: 'v2_13', word: 'Village', partOfSpeech: 'noun', hebrewTranslation: 'כפר', ipa: '/ˈvɪlɪdʒ/', phoneticTrap: 'V', hebrewPhoneticTip: 'אות V פותחת בנשיפה.', exampleSentenceEn: 'My grandmother lives in a small village.', exampleSentenceHe: 'סבתא שלי גרה בכפר קטן.', band: 'Band I', category: 'מקומות' },
        { id: 'v2_14', word: 'Vegetable', partOfSpeech: 'noun', hebrewTranslation: 'ירק', ipa: '/ˈvedʒtəbəl/', phoneticTrap: 'V', hebrewPhoneticTip: 'שיניים על שפה ב-V.', exampleSentenceEn: 'Carrot is a healthy vegetable.', exampleSentenceHe: 'גזר הוא ירק בריא.', band: 'Band I', category: 'אוכל' },
        { id: 'v2_15', word: 'Visit', partOfSpeech: 'verb', hebrewTranslation: 'לבקר (מישהו)', ipa: '/ˈvɪzɪt/', phoneticTrap: 'V', hebrewPhoneticTip: 'נשיפת V בשיניים.', exampleSentenceEn: 'We visit our friends on Friday.', exampleSentenceHe: 'אנחנו מבקרים את החברים שלנו ביום שישי.', band: 'Band I', category: 'פעולות' },
        { id: 'v2_16', word: 'Voice', partOfSpeech: 'noun', hebrewTranslation: 'קול', ipa: '/vɔɪs/', phoneticTrap: 'V', hebrewPhoneticTip: 'צליל V פותח.', exampleSentenceEn: 'She has a beautiful singing voice.', exampleSentenceHe: 'יש לה קול שירה יפה.', band: 'Band I', category: 'גוף' }
      ]
    },

    // ==========================================
    // UNIT 3: The Plural Safari & Vowel Rescue
    // ==========================================
    {
      id: 'unit-3',
      unitNumber: 3,
      titleEn: 'The Plural Safari & Vowel Rescue',
      titleHe: 'ספארי הריבוי והתנועות הקצרות',
      themeHe: 'סיומות ריבוי (-s, -es) ומילים יוצאות דופן, והבחנה בין ship ל-sheep',
      descriptionHe: 'איך הופכים מילה יחידה לרבים, ואיך מבדילים בין תנועה קצרה (ספינה) לתנועה ארוכה (כבשה)?',
      badgeIcon: 'Award',
      xpReward: 250,
      phonicsGapName: 'Short /ɪ/ vs Long /iː/',
      grammarFocusName: 'Plural Nouns (-s / -es / irregulars: children, feet)',
      phonicsExercises: [
        {
          id: 'u3-p1',
          type: 'phonics_minimal_pair',
          titleHe: 'אונייה גדולה (Ship) או כבשה צמרירית (Sheep)?',
          instructionHe: 'האזינו לאורך התנועה: האם הצליל היה קצר וחטוף (Ship) או ארוך ומתוח (Sheep)?',
          targetLetter: 'short-I',
          distractorLetter: 'long-EE',
          targetWord: {
            id: 'w-ship',
            letter: 'short-I',
            word: 'Ship',
            ipa: '/ʃɪp/',
            hebrewTranslation: 'ספינה / אונייה',
            audioText: 'ship',
            hebrewLetterEquivalent: 'חיריק חטוף קצר',
            exampleSentence: 'The ship sails on the sea.'
          },
          distractorWord: {
            id: 'w-sheep',
            letter: 'long-EE',
            word: 'Sheep',
            ipa: '/ʃiːp/',
            hebrewTranslation: 'כבשה',
            audioText: 'sheep',
            hebrewLetterEquivalent: 'אי מוארכת ומתוחה',
            exampleSentence: 'The white sheep eats grass.'
          },
          hebrewHint: 'ספינה היא קצרה: /ʃɪp/. כבשה מחייכת באורך: /ʃiːp/!',
          articulationGuide: {
            mouthShape: 'short_relaxed_vowel',
            soundNameEn: 'Short /ɪ/ vs Long /iː/',
            soundNameHe: 'הבחנה בין תנועה קצרה לארוכה',
            hebrewRule: 'התנועה הקצרה נאמרת במהירות ללא חיוך מתוח.',
            mnemonicHe: 'Ship שטה מהר, Sheep מחייכת כמו כבשה!',
            articulationCueEn: 'Relax jaw for short /ɪ/, smile wide for long /iː/.'
          },
          explanationHe: 'מעולה! Ship היא אונייה בצליל חטוף. Sheep זו כבשה בצליל מתוח.'
        },
        {
          id: 'u3-p2',
          type: 'phonics_minimal_pair',
          titleHe: 'לשבת (Sit) או כיסא ומושב (Seat)?',
          instructionHe: 'הקשיבו היטב: האם שמעתם Sit או Seat?',
          targetLetter: 'long-EE',
          distractorLetter: 'short-I',
          targetWord: {
            id: 'w-seat',
            letter: 'long-EE',
            word: 'Seat',
            ipa: '/siːt/',
            hebrewTranslation: 'מושב / מקום ישיבה',
            audioText: 'seat',
            hebrewLetterEquivalent: 'תנועת אי ארוכה',
            exampleSentence: 'Please take a seat.'
          },
          distractorWord: {
            id: 'w-sit',
            letter: 'short-I',
            word: 'Sit',
            ipa: '/sɪt/',
            hebrewTranslation: 'לשבת (פעולה)',
            audioText: 'sit',
            hebrewLetterEquivalent: 'חיריק קצר',
            exampleSentence: 'Sit down on the chair.'
          },
          hebrewHint: 'צליל אי מתוח וארוך = Seat (מושב).',
          articulationGuide: {
            mouthShape: 'short_relaxed_vowel',
            soundNameEn: 'Long /iː/',
            soundNameHe: 'צליל /iː/ ארוך',
            hebrewRule: 'פה מחייך בצורה מוארכת.',
            mnemonicHe: 'Seat הוא המושב שלך.',
            articulationCueEn: 'Elongate the vowel sound.'
          },
          explanationHe: 'כל הכבוד! Seat הוא מושב באורך מתוח.'
        }
      ],
      verbExercises: [
        {
          id: 'u3-v1',
          hebrewPromptSentence: 'הילדים נמצאים בכיתה.',
          subject: 'The children',
          subjectType: 'plural_or_you',
          baseTemplateBefore: 'The children',
          baseTemplateAfter: 'in the classroom.',
          correctAnswer: 'are',
          options: ['are', 'is', 'am'],
          hebrewContrastLesson: 'זהירות! child = ילד אחד, אבל children = ילדים ברבים! לכן חובה ARE!',
          fullSentenceEn: 'The children are in the classroom.',
          audioText: 'The children are in the classroom.'
        },
        {
          id: 'u3-v2',
          hebrewPromptSentence: 'שלושה חתולים ישנים על השולחן.',
          subject: 'Three cats',
          subjectType: 'plural_or_you',
          baseTemplateBefore: 'Three cats',
          baseTemplateAfter: 'sleeping on the table.',
          correctAnswer: 'are',
          options: ['are', 'is', 'am'],
          hebrewContrastLesson: 'Cats זה שם עצם בריבוי (יותר מאחד), לכן מחברים בורג ARE!',
          fullSentenceEn: 'Three cats are sleeping on the table.',
          audioText: 'Three cats are sleeping on the table.'
        }
      ],
      sentenceExercises: [
        {
          id: 'u3-s1',
          hebrewPromptSentence: 'יש לי שני ספרים גדולים.',
          targetSentenceTokens: ['I', 'have', 'two', 'big', 'books', '.'],
          scrambledTokens: [
            { id: 't1', text: 'I' },
            { id: 't2', text: 'have' },
            { id: 't3', text: 'two' },
            { id: 't4', text: 'big' },
            { id: 't5', text: 'books' },
            { id: 't6', text: '.', isPunctuation: true },
            { id: 't7', text: 'book', isDistractor: true }
          ],
          grammarFocus: 'plural_nouns',
          capitalizationTipHe: 'שם הגוף I באות גדולה.',
          ruleExplanationHe: 'כיון שיש שניים (two), המילה book מקבלת סיומת רבים: books!',
          audioFullSentence: 'I have two big books.'
        }
      ],
      suffixItems: [
        { id: 'suf-6', baseWord: 'cat', targetSuffix: '-s', fullWord: 'cats', hebrewMeaning: 'חתולים', ruleHintHe: 'סיומת ריבוי רגילה' },
        { id: 'suf-7', baseWord: 'box', targetSuffix: '-es', fullWord: 'boxes', hebrewMeaning: 'קופסאות', ruleHintHe: 'אחרי x מוסיפים es' },
        { id: 'suf-8', baseWord: 'watch', targetSuffix: '-es', fullWord: 'watches', hebrewMeaning: 'שעונים', ruleHintHe: 'אחרי ch מוסיפים es' }
      ],
      vocabulary: [
        { id: 'v9', word: 'Child', partOfSpeech: 'noun', hebrewTranslation: 'ילד / ילדה (יחיד)', ipa: '/tʃaɪld/', exampleSentenceEn: 'The child is smiling.', exampleSentenceHe: 'הילד מחייך.', band: 'Band I', category: 'אנשים' },
        { id: 'v10', word: 'Children', partOfSpeech: 'noun', hebrewTranslation: 'ילדים (רבים יוצא דופן!)', ipa: '/ˈtʃɪldrən/', exampleSentenceEn: 'The children play football together.', exampleSentenceHe: 'הילדים משחקים כדורגל יחד.', band: 'Band I', category: 'אנשים' },
        { id: 'v11', word: 'Book', partOfSpeech: 'noun', hebrewTranslation: 'ספר', ipa: '/bʊk/', exampleSentenceEn: 'Open your English book.', exampleSentenceHe: 'פתחו את ספר האנגלית שלכם.', band: 'Band I', category: 'בית ספר' },
        { id: 'v3_4', word: 'Box', partOfSpeech: 'noun', hebrewTranslation: 'קופסה (רבים: boxes)', ipa: '/bɒks/', exampleSentenceEn: 'What is inside the big box?', exampleSentenceHe: 'מה יש בתוך הקופסה הגדולה?', band: 'Band I', category: 'חפצים' },
        { id: 'v3_5', word: 'Fish', partOfSpeech: 'noun', hebrewTranslation: 'דג (תנועת i קצרה)', ipa: '/fɪʃ/', phoneticTrap: 'short_vowel', hebrewPhoneticTip: 'חיריק חטוף קצר.', exampleSentenceEn: 'The gold fish swims in water.', exampleSentenceHe: 'דג הזהב שוחה במים.', band: 'Band I', category: 'חיות' },
        { id: 'v3_6', word: 'Sheep', partOfSpeech: 'noun', hebrewTranslation: 'כבשה (תנועת ee ארוכה)', ipa: '/ʃiːp/', phoneticTrap: 'short_vowel', hebrewPhoneticTip: 'תנועת אי מתוחה כמו חיוך.', exampleSentenceEn: 'The white sheep eats green grass.', exampleSentenceHe: 'הכבשה הלבנה אוכלת עשב ירוק.', band: 'Band I', category: 'חיות' },
        { id: 'v3_7', word: 'Ship', partOfSpeech: 'noun', hebrewTranslation: 'אונייה / ספינה (תנועה קצרה)', ipa: '/ʃɪp/', phoneticTrap: 'short_vowel', hebrewPhoneticTip: 'תנועת אי קצרה וחטופה.', exampleSentenceEn: 'The ship travels on the blue sea.', exampleSentenceHe: 'האונייה מפליגה בים הכחול.', band: 'Band I', category: 'כלי תחבורה' },
        { id: 'v3_8', word: 'Tree', partOfSpeech: 'noun', hebrewTranslation: 'עץ', ipa: '/triː/', exampleSentenceEn: 'Apples grow on the apple tree.', exampleSentenceHe: 'תפוחים גדלים על עץ התפוח.', band: 'Band I', category: 'טבע' },
        { id: 'v3_9', word: 'Green', partOfSpeech: 'adjective', hebrewTranslation: 'ירוק', ipa: '/ɡriːn/', exampleSentenceEn: 'The frog is bright green.', exampleSentenceHe: 'הצפרדע ירוקה וזוהרת.', band: 'Band I', category: 'צבעים' },
        { id: 'v3_10', word: 'Foot', partOfSpeech: 'noun', hebrewTranslation: 'כף רגל (יחיד)', ipa: '/fʊt/', exampleSentenceEn: 'He hurt his right foot.', exampleSentenceHe: 'הוא קיבל מכה בכף רגלו הימנית.', band: 'Band I', category: 'גוף' },
        { id: 'v3_11', word: 'Feet', partOfSpeech: 'noun', hebrewTranslation: 'כפות רגליים (רבים יוצא דופן!)', ipa: '/fiːt/', phoneticTrap: 'short_vowel', exampleSentenceEn: 'I have two strong feet.', exampleSentenceHe: 'יש לי שתי רגליים חזקות.', band: 'Band I', category: 'גוף' },
        { id: 'v3_12', word: 'Sleep', partOfSpeech: 'verb', hebrewTranslation: 'לישון (תנועה ארוכה)', ipa: '/sliːp/', exampleSentenceEn: 'Babies sleep many hours.', exampleSentenceHe: 'תינוקות ישנים שעות רבות.', band: 'Band I', category: 'פעולות' }
      ]
    },

    // ==========================================
    // UNIT 4: The Question Quest & "TH" Sounds
    // ==========================================
    {
      id: 'unit-4',
      unitNumber: 4,
      titleEn: 'The Question Quest & "TH" Sounds',
      titleHe: 'מסע השאלות וצלילי TH',
      themeHe: 'הוצאת לשון בצליל TH ויצירת שאלות כן/לא ושאלות מידע',
      descriptionHe: 'איך מבטאים Three בלי להגיד "סרי"? ואיך הופכים משפט רגיל לשאלה באנגלית!',
      badgeIcon: 'HelpCircle',
      xpReward: 300,
      phonicsGapName: 'Interdental "TH" (/θ/ & /ð/)',
      grammarFocusName: 'Question Inversion (Is he...? / Are you...? / Where is...?)',
      phonicsExercises: [
        {
          id: 'u4-p1',
          type: 'phonics_minimal_pair',
          titleHe: 'המספר שלוש (Three) או עץ ביער (Tree)?',
          instructionHe: 'האזינו לקול: האם הלשון בצבצה בין השיניים (Three) או נקשה בחך (Tree)?',
          targetLetter: 'TH',
          distractorLetter: 'T',
          targetWord: {
            id: 'w-three',
            letter: 'TH',
            word: 'Three',
            ipa: '/θriː/',
            hebrewTranslation: 'שלוש (מספר)',
            audioText: 'three',
            hebrewLetterEquivalent: 'ת׳ מוטעמת עם לשון בחוץ',
            exampleSentence: 'One, two, three apples.'
          },
          distractorWord: {
            id: 'w-tree',
            letter: 'T',
            word: 'Tree',
            ipa: '/triː/',
            hebrewTranslation: 'עץ',
            audioText: 'tree',
            hebrewLetterEquivalent: 'ט / ת רגילה',
            exampleSentence: 'The green tree is tall.'
          },
          hebrewHint: 'המספר 3 מתחיל ב-TH: הלשון מציצה בעדינות בין השיניים!',
          articulationGuide: {
            mouthShape: 'tongue_between_teeth',
            soundNameEn: '/θ/ Voiceless Dental Fricative',
            soundNameHe: 'צליל TH עם לשון בחוץ',
            hebrewRule: 'הלשון מבצבצת בעדינות בין השיניים העליונות לתחתונות.',
            mnemonicHe: 'TH כמו Thank you ו-Three!',
            articulationCueEn: 'Place tongue tip between teeth and breathe out.'
          },
          explanationHe: 'כל הכבוד! Three (המספר 3) נאמר עם לשון בין השיניים ב-TH.'
        },
        {
          id: 'u4-p2',
          type: 'phonics_minimal_pair',
          titleHe: 'לחשוב (Think) או לשקוע במים (Sink)?',
          instructionHe: 'הקשיבו: Think עם לשון בין השיניים או Sink עם סמ״ך שורקת?',
          targetLetter: 'TH',
          distractorLetter: 'S',
          targetWord: {
            id: 'w-think',
            letter: 'TH',
            word: 'Think',
            ipa: '/θɪŋk/',
            hebrewTranslation: 'לחשוב',
            audioText: 'think',
            hebrewLetterEquivalent: 'ת׳ מוטעמת',
            exampleSentence: 'I think you are right.'
          },
          distractorWord: {
            id: 'w-sink',
            letter: 'S',
            word: 'Sink',
            ipa: '/sɪŋk/',
            hebrewTranslation: 'כיור / לשקוע',
            audioText: 'sink',
            hebrewLetterEquivalent: 'ס שורקת',
            exampleSentence: 'Wash hands in the sink.'
          },
          hebrewHint: 'לחשוב באנגלית זה Think עם TH (ולא Sink שפירושו כיור!).',
          articulationGuide: {
            mouthShape: 'tongue_between_teeth',
            soundNameEn: '/θ/ Sound',
            soundNameHe: 'צליל TH',
            hebrewRule: 'לשון בין השיניים מייצרת TH.',
            mnemonicHe: 'Think דורש מחשבה ולשון בין השיניים.',
            articulationCueEn: 'Tip of tongue between front teeth.'
          },
          explanationHe: 'מצוין! Think הוא פועל המחשבה ב-TH.'
        }
      ],
      verbExercises: [
        {
          id: 'u4-v1',
          hebrewPromptSentence: 'האם אתה מוכן לשיעור?',
          subject: 'You',
          subjectType: 'plural_or_you',
          baseTemplateBefore: '___',
          baseTemplateAfter: 'you ready for class?',
          correctAnswer: 'Are',
          options: ['Are', 'Is', 'Am'],
          hebrewContrastLesson: 'בשאלת כן/לא באנגלית, פועל העזר קופץ להתחלה לפני You!',
          fullSentenceEn: 'Are you ready for class?',
          audioText: 'Are you ready for class?'
        },
        {
          id: 'u4-v2',
          hebrewPromptSentence: 'איפה הספר שלי?',
          subject: 'My book',
          subjectType: 'third_singular',
          baseTemplateBefore: 'Where',
          baseTemplateAfter: 'my book?',
          correctAnswer: 'is',
          options: ['is', 'are', 'am'],
          hebrewContrastLesson: 'הספר (book) הוא יחיד (It), לכן: Where IS my book?',
          fullSentenceEn: 'Where is my book?',
          audioText: 'Where is my book?'
        }
      ],
      sentenceExercises: [
        {
          id: 'u4-s1',
          hebrewPromptSentence: 'האם הכלב רעב היום?',
          targetSentenceTokens: ['Is', 'the', 'dog', 'hungry', 'today', '?'],
          scrambledTokens: [
            { id: 't1', text: 'Is' },
            { id: 't2', text: 'the' },
            { id: 't3', text: 'dog' },
            { id: 't4', text: 'hungry' },
            { id: 't5', text: 'today' },
            { id: 't6', text: '?', isPunctuation: true },
            { id: 't7', text: 'Are', isDistractor: true }
          ],
          grammarFocus: 'question_inversion',
          capitalizationTipHe: 'Is מתחיל את השאלה באות I גדולה!',
          ruleExplanationHe: 'בשאלות, הפועל Is עובר לפני the dog, ובסוף שמים סימן שאלה.',
          audioFullSentence: 'Is the dog hungry today?'
        }
      ],
      suffixItems: [
        { id: 'suf-9', baseWord: 'ask', targetSuffix: '-s', fullWord: 'asks', hebrewMeaning: 'שואל (יחיד)', ruleHintHe: 'הוספת s לשאלות בהווה' }
      ],
      vocabulary: [
        { id: 'v12', word: 'Three', partOfSpeech: 'noun', hebrewTranslation: 'שלוש (3)', ipa: '/θriː/', phoneticTrap: 'TH', hebrewPhoneticTip: 'אותיות TH עם לשון בין השיניים (לא ס׳ ולא ת׳).', exampleSentenceEn: 'I have three red pencils.', exampleSentenceHe: 'יש לי שלושה עפרונות אדומים.', band: 'Band I', category: 'מספרים' },
        { id: 'v13', word: 'Where', partOfSpeech: 'pronoun', hebrewTranslation: 'איפה / להיכן', ipa: '/weər/', exampleSentenceEn: 'Where is my friend Maya?', exampleSentenceHe: 'איפה החברה שלי מאיה?', band: 'Band I', category: 'שאלות' },
        { id: 'v14', word: 'Thank you', partOfSpeech: 'verb', hebrewTranslation: 'תודה רבה', ipa: '/ˈθæŋk juː/', phoneticTrap: 'TH', hebrewPhoneticTip: 'צליל TH עדין עם הוצאת לשון.', exampleSentenceEn: 'Thank you very much for helping me.', exampleSentenceHe: 'תודה רבה לך על העזרה.', band: 'Band I', category: 'נימוסים' },
        { id: 'v4_4', word: 'This', partOfSpeech: 'pronoun', hebrewTranslation: 'זה / זו (קרוב)', ipa: '/ðɪs/', phoneticTrap: 'TH', hebrewPhoneticTip: 'צליל TH קולי (כמו דלת עם לשון).', exampleSentenceEn: 'This is my favorite game.', exampleSentenceHe: 'זהו המשחק האהוב עלי.', band: 'Band I', category: 'כינויי גוף' },
        { id: 'v4_5', word: 'That', partOfSpeech: 'pronoun', hebrewTranslation: 'ההוא / ההיא (רחוק)', ipa: '/ðæt/', phoneticTrap: 'TH', hebrewPhoneticTip: 'צליל TH קולי.', exampleSentenceEn: 'That bird is flying high.', exampleSentenceHe: 'הציפור ההיא עפה גבוה.', band: 'Band I', category: 'כינויי גוף' },
        { id: 'v4_6', word: 'Mother', partOfSpeech: 'noun', hebrewTranslation: 'אמא', ipa: '/ˈmʌðər/', phoneticTrap: 'TH', hebrewPhoneticTip: 'אותיות TH באמצע המילה.', exampleSentenceEn: 'My mother is reading a book.', exampleSentenceHe: 'אמא שלי קוראת ספר.', band: 'Band I', category: 'משפחה' },
        { id: 'v4_7', word: 'Brother', partOfSpeech: 'noun', hebrewTranslation: 'אח', ipa: '/ˈbrʌðər/', phoneticTrap: 'TH', hebrewPhoneticTip: 'אותיות TH באמצע.', exampleSentenceEn: 'I help my little brother.', exampleSentenceHe: 'אני עוזר לאחי הקטן.', band: 'Band I', category: 'משפחה' },
        { id: 'v4_8', word: 'What', partOfSpeech: 'pronoun', hebrewTranslation: 'מה / איזה', ipa: '/wɒt/', exampleSentenceEn: 'What is your name?', exampleSentenceHe: 'מה שמך?', band: 'Band I', category: 'שאלות' },
        { id: 'v4_9', word: 'Who', partOfSpeech: 'pronoun', hebrewTranslation: 'מי', ipa: '/huː/', exampleSentenceEn: 'Who is at the door?', exampleSentenceHe: 'מי נמצא ליד הדלת?', band: 'Band I', category: 'שאלות' },
        { id: 'v4_10', word: 'When', partOfSpeech: 'pronoun', hebrewTranslation: 'מתי', ipa: '/wen/', exampleSentenceEn: 'When do we go home?', exampleSentenceHe: 'מתי אנחנו הולכים הביתה?', band: 'Band I', category: 'שאלות' },
        { id: 'v4_11', word: 'Think', partOfSpeech: 'verb', hebrewTranslation: 'לחשוב', ipa: '/θɪŋk/', phoneticTrap: 'TH', hebrewPhoneticTip: 'הוצאת לשון קלה ב-TH.', exampleSentenceEn: 'I think English is fun.', exampleSentenceHe: 'אני חושב שאנגלית זה כיף.', band: 'Band I', category: 'פעולות' },
        { id: 'v4_12', word: 'Thin', partOfSpeech: 'adjective', hebrewTranslation: 'רזה / דק', ipa: '/θɪn/', phoneticTrap: 'TH', hebrewPhoneticTip: 'צליל TH עדין ותנועת i קצרה.', exampleSentenceEn: 'This notebook is thin.', exampleSentenceHe: 'המחברת הזו דקה.', band: 'Band I', category: 'תכונות' }
      ]
    },

    // ==========================================
    // UNIT 5: The Magic E & Classroom Kingdom
    // ==========================================
    {
      id: 'unit-5',
      unitNumber: 5,
      titleEn: 'The Magic E & Classroom Kingdom',
      titleHe: 'ה-E הקסומה וממלכת הכיתה',
      themeHe: 'איך האות E השקטה בסוף מילה הופכת תנועה קצרה לארוכה (Cap ל-Cape), ומילות בית ספר',
      descriptionHe: 'נגלה את כוחה של ה-E הקסומה שמשנה את צליל המילה, ונבנה משפטים על הכיתה!',
      badgeIcon: 'Sparkles',
      xpReward: 350,
      phonicsGapName: 'Silent "Magic E" (CVC -> CVCe)',
      grammarFocusName: 'Demonstrative Pronouns (This is / That is / These are)',
      phonicsExercises: [
        {
          id: 'u5-p1',
          type: 'phonics_minimal_pair',
          titleHe: 'כובע מצחייה (Cap) או גלימת קוסם (Cape)?',
          instructionHe: 'האזינו לצליל התנועה: האם זו תנועת /æ/ קצרה או /eɪ/ ארוכה של E קסומה?',
          targetLetter: 'CVCe',
          distractorLetter: 'CVC',
          targetWord: {
            id: 'w-cape',
            letter: 'CVCe',
            word: 'Cape',
            ipa: '/keɪp/',
            hebrewTranslation: 'גלימה (עם E קסומה בסוף)',
            audioText: 'cape',
            hebrewLetterEquivalent: 'תנועת איי ארוכה',
            exampleSentence: 'The superhero wears a blue cape.'
          },
          distractorWord: {
            id: 'w-cap',
            letter: 'CVC',
            word: 'Cap',
            ipa: '/kæp/',
            hebrewTranslation: 'כובע מצחייה (תנועה קצרה)',
            audioText: 'cap',
            hebrewLetterEquivalent: 'תנועת אַ קצרה',
            exampleSentence: 'Wear your cap in the sunny yard.'
          },
          hebrewHint: 'ה-E בסוף המילה cape הופכת את התנועה לארוכה: קֵייפּ!',
          articulationGuide: {
            mouthShape: 'short_relaxed_vowel',
            soundNameEn: 'Long /eɪ/ Vowel',
            soundNameHe: 'תנועת A ארוכה (Magic E)',
            hebrewRule: 'ה-E השקטה בסוף גורמת לאות A להישמע בשמה: איי!',
            mnemonicHe: 'E הקסומה נוגעת באות A והופכת אותה לאיי!',
            articulationCueEn: 'Vowel glides from /e/ to /ɪ/.'
          },
          explanationHe: 'מדויק! Cape זו גלימה עם E קסומה. Cap זה כובע מצחייה רגיל.'
        },
        {
          id: 'u5-p2',
          type: 'phonics_minimal_pair',
          titleHe: 'ערכת כלים (Kit) או עפיפון מרחף (Kite)?',
          instructionHe: 'הקשיבו לצליל: Kit קצר או Kite ארוך עם E קסומה?',
          targetLetter: 'CVCe',
          distractorLetter: 'CVC',
          targetWord: {
            id: 'w-kite',
            letter: 'CVCe',
            word: 'Kite',
            ipa: '/kaɪt/',
            hebrewTranslation: 'עפיפון (עם E קסומה)',
            audioText: 'kite',
            hebrewLetterEquivalent: 'תנועת אַיי ארוכה',
            exampleSentence: 'The kite flies high in the wind.'
          },
          distractorWord: {
            id: 'w-kit',
            letter: 'CVC',
            word: 'Kit',
            ipa: '/kɪt/',
            hebrewTranslation: 'ערכה / תיק עזרה',
            audioText: 'kit',
            hebrewLetterEquivalent: 'חיריק חטוף קצר',
            exampleSentence: 'The first aid kit is on the table.'
          },
          hebrewHint: 'אות I אומרת את שמה (אַיי) רק כשיש E קסומה בסוף!',
          articulationGuide: {
            mouthShape: 'short_relaxed_vowel',
            soundNameEn: 'Long /aɪ/ Vowel',
            soundNameHe: 'תנועת I ארוכה (Magic E)',
            hebrewRule: 'E בסוף הופכת חיריק קצר לצליל אַיי!',
            mnemonicHe: 'Kite עף לשמיים עם ה-E הקסומה!',
            articulationCueEn: 'Full diphthong /aɪ/ sound.'
          },
          explanationHe: 'מצוין! Kite זה עפיפון בזכות ה-E הקסומה!'
        }
      ],
      verbExercises: [
        {
          id: 'u5-v1',
          hebrewPromptSentence: 'זהו המורה החדש שלנו לאנגלית.',
          subject: 'This',
          subjectType: 'third_singular',
          baseTemplateBefore: 'This',
          baseTemplateAfter: 'our new English teacher.',
          correctAnswer: 'is',
          options: ['is', 'are', 'am'],
          hebrewContrastLesson: 'בעברית: "זה המורה". באנגלית חייבים פועל עזר יחיד: This IS our teacher!',
          fullSentenceEn: 'This is our new English teacher.',
          audioText: 'This is our new English teacher.'
        },
        {
          id: 'u5-v2',
          hebrewPromptSentence: 'אלו הם העפרונות הצבעוניים שלי.',
          subject: 'These',
          subjectType: 'plural_or_you',
          baseTemplateBefore: 'These',
          baseTemplateAfter: 'my colorful pencils.',
          correctAnswer: 'are',
          options: ['are', 'is', 'am'],
          hebrewContrastLesson: 'עפרונות הם רבים (pencils), ולכן: These ARE my pencils!',
          fullSentenceEn: 'These are my colorful pencils.',
          audioText: 'These are my colorful pencils.'
        }
      ],
      sentenceExercises: [
        {
          id: 'u5-s1',
          hebrewPromptSentence: 'זהו בית הספר היפה שלנו.',
          targetSentenceTokens: ['This', 'is', 'our', 'beautiful', 'school', '.'],
          scrambledTokens: [
            { id: 't1', text: 'This' },
            { id: 't2', text: 'is' },
            { id: 't3', text: 'our' },
            { id: 't4', text: 'beautiful' },
            { id: 't5', text: 'school' },
            { id: 't6', text: '.', isPunctuation: true },
            { id: 't7', text: 'are', isDistractor: true }
          ],
          grammarFocus: 'to_be_copula',
          capitalizationTipHe: 'מתחילים ב-This באות T גדולה.',
          ruleExplanationHe: 'בית ספר הוא יחיד, לכן משתמשים ב-This is ולא ב-These are.',
          audioFullSentence: 'This is our beautiful school.'
        }
      ],
      suffixItems: [
        { id: 'suf-10', baseWord: 'write', targetSuffix: '-s', fullWord: 'writes', hebrewMeaning: 'כותב (יחיד)', ruleHintHe: 'הוספת s לפועל שמסתיים ב-e' },
        { id: 'suf-11', baseWord: 'teach', targetSuffix: '-es', fullWord: 'teaches', hebrewMeaning: 'מלמד (יחיד)', ruleHintHe: 'אחרי ch מוסיפים es' }
      ],
      vocabulary: [
        { id: 'v5_1', word: 'School', partOfSpeech: 'noun', hebrewTranslation: 'בית ספר', ipa: '/skuːl/', exampleSentenceEn: 'I walk to school every morning.', exampleSentenceHe: 'אני הולך לבית הספר בכל בוקר.', band: 'Band I', category: 'בית ספר' },
        { id: 'v5_2', word: 'Teacher', partOfSpeech: 'noun', hebrewTranslation: 'מורה', ipa: '/ˈtiːtʃər/', exampleSentenceEn: 'Our teacher explains the lesson clearly.', exampleSentenceHe: 'המורה שלנו מסביר את השיעור בבהירות.', band: 'Band I', category: 'בית ספר' },
        { id: 'v5_3', word: 'Classroom', partOfSpeech: 'noun', hebrewTranslation: 'כיתת לימוד', ipa: '/ˈklɑːsruːm/', exampleSentenceEn: 'Our classroom has sunny windows.', exampleSentenceHe: 'בכיתה שלנו יש חלונות שטופי שמש.', band: 'Band I', category: 'בית ספר' },
        { id: 'v5_4', word: 'Desk', partOfSpeech: 'noun', hebrewTranslation: 'שולחן כתיבה / שולחן תלמיד', ipa: '/desk/', exampleSentenceEn: 'Put your books on the wooden desk.', exampleSentenceHe: 'שימו את הספרים על שולחן העץ.', band: 'Band I', category: 'בית ספר' },
        { id: 'v5_5', word: 'Bag', partOfSpeech: 'noun', hebrewTranslation: 'תיק / ילקוט', ipa: '/bæɡ/', exampleSentenceEn: 'My school bag is blue and black.', exampleSentenceHe: 'תיק בית הספר שלי כחול ושחור.', band: 'Band I', category: 'בית ספר' },
        { id: 'v5_6', word: 'Ruler', partOfSpeech: 'noun', hebrewTranslation: 'סרגל', ipa: '/ˈruːlər/', exampleSentenceEn: 'Draw a straight line with a ruler.', exampleSentenceHe: 'ציירו קו ישר בעזרת סרגל.', band: 'Band I', category: 'בית ספר' },
        { id: 'v5_7', word: 'White', partOfSpeech: 'adjective', hebrewTranslation: 'לבן', ipa: '/waɪt/', exampleSentenceEn: 'The clouds are fluffy and white.', exampleSentenceHe: 'העננים רכים ולבנים.', band: 'Band I', category: 'צבעים' },
        { id: 'v5_8', word: 'Black', partOfSpeech: 'adjective', hebrewTranslation: 'שחור', ipa: '/blæk/', exampleSentenceEn: 'The cat has black fur.', exampleSentenceHe: 'לחתול יש פרווה שחורה.', band: 'Band I', category: 'צבעים' },
        { id: 'v5_9', word: 'Yellow', partOfSpeech: 'adjective', hebrewTranslation: 'צהוב', ipa: '/ˈjeləʊ/', exampleSentenceEn: 'The warm sun is yellow.', exampleSentenceHe: 'השמש החמימה צהובה.', band: 'Band I', category: 'צבעים' },
        { id: 'v5_10', word: 'Red', partOfSpeech: 'adjective', hebrewTranslation: 'אדום', ipa: '/red/', exampleSentenceEn: 'She picked a ripe red apple.', exampleSentenceHe: 'היא קטפה תפוח אדום ובשל.', band: 'Band I', category: 'צבעים' },
        { id: 'v5_11', word: 'Write', partOfSpeech: 'verb', hebrewTranslation: 'לכתוב (עם E שקטה)', ipa: '/raɪt/', phoneticTrap: 'magic_e', exampleSentenceEn: 'Please write your name in English.', exampleSentenceHe: 'אנא כתבו את שמכם באנגלית.', band: 'Band I', category: 'פעולות' },
        { id: 'v5_12', word: 'Listen', partOfSpeech: 'verb', hebrewTranslation: 'להקשיב / להאזין', ipa: '/ˈlɪsən/', exampleSentenceEn: 'Listen carefully to the teacher.', exampleSentenceHe: 'הקשיבו היטב למורה.', band: 'Band I', category: 'פעולות' }
      ]
    },

    // ==========================================
    // UNIT 6: Daily Habits & Animal Safari
    // ==========================================
    {
      id: 'unit-6',
      unitNumber: 6,
      titleEn: 'Daily Habits & Animal Safari',
      titleHe: 'ספארי ההרגלים וחיות הבר',
      themeHe: 'פועל בהווה פשוט עם גוף שלישי (He/She/It eats), וחיות הבר',
      descriptionHe: 'איך מתארים שגרה יומיומית של אדם או חיה, ואיך מוסיפים s לפועל בהווה פשוט!',
      badgeIcon: 'Award',
      xpReward: 400,
      phonicsGapName: 'Voiced vs Voiceless Suffix S (/s/ vs /z/)',
      grammarFocusName: 'Present Simple Habits (He eats / She plays / It runs)',
      phonicsExercises: [
        {
          id: 'u6-p1',
          type: 'phonics_minimal_pair',
          titleHe: 'סיומת חתולים (Cats - /s/) או כלבים (Dogs - /z/)?',
          instructionHe: 'האזינו לצליל ה-S בסוף המילה: האם זה ס׳ שקטה או ז׳ רוטטת?',
          targetLetter: 'Z-sound',
          distractorLetter: 'S-sound',
          targetWord: {
            id: 'w-dogs',
            letter: 'Z-sound',
            word: 'Dogs',
            ipa: '/dɒɡz/',
            hebrewTranslation: 'כלבים (האות s נשמעת כמו z רוטטת)',
            audioText: 'dogs',
            hebrewLetterEquivalent: 'סיומת ז רוטטת',
            exampleSentence: 'The two dogs play together.'
          },
          distractorWord: {
            id: 'w-cats',
            letter: 'S-sound',
            word: 'Cats',
            ipa: '/kæts/',
            hebrewTranslation: 'חתולים (האות s נשמעת כמו ס שקטה)',
            audioText: 'cats',
            hebrewLetterEquivalent: 'סיומת ס לוחשת',
            exampleSentence: 'The white cats sleep on the sofa.'
          },
          hebrewHint: 'אחרי אות קולית כמו G, האות S רוטטת כמו Z!',
          articulationGuide: {
            mouthShape: 'teeth_on_lip_air',
            soundNameEn: '/z/ Voiced Sibilant',
            soundNameHe: 'צליל Z בסיומות',
            hebrewRule: 'אחרי צליל קולי, ה-S נשמעת כמו ז!',
            mnemonicHe: 'Dogs עושים זזז בסוף!',
            articulationCueEn: 'Vocal cords vibrate at the end.'
          },
          explanationHe: 'מצוין! במילה Dogs ה-S נשמעת כמו Z בגלל ה-G הרוטטת.'
        }
      ],
      verbExercises: [
        {
          id: 'u6-v1',
          hebrewPromptSentence: 'האריה הגדול ישן מתחת לעץ.',
          subject: 'The big lion',
          subjectType: 'third_singular',
          baseTemplateBefore: 'The big lion',
          baseTemplateAfter: 'under the shade tree.',
          correctAnswer: 'sleeps',
          options: ['sleeps', 'sleep', 'sleeping'],
          hebrewContrastLesson: 'האריה הוא גוף שלישי יחיד (He/It). לכן הפועל מקבל s: sleeps!',
          fullSentenceEn: 'The big lion sleeps under the shade tree.',
          audioText: 'The big lion sleeps under the shade tree.'
        },
        {
          id: 'u6-v2',
          hebrewPromptSentence: 'הקוף אוכל בננות מתוקות בכל יום.',
          subject: 'The monkey',
          subjectType: 'third_singular',
          baseTemplateBefore: 'The monkey',
          baseTemplateAfter: 'sweet bananas every day.',
          correctAnswer: 'eats',
          options: ['eats', 'eat', 'is eat'],
          hebrewContrastLesson: 'הרגל של יחיד מקבל s בסוף: The monkey eats bananas!',
          fullSentenceEn: 'The monkey eats sweet bananas every day.',
          audioText: 'The monkey eats sweet bananas every day.'
        }
      ],
      sentenceExercises: [
        {
          id: 'u6-s1',
          hebrewPromptSentence: 'הפיל הגדול שותה מים קרים.',
          targetSentenceTokens: ['The', 'big', 'elephant', 'drinks', 'cold', 'water', '.'],
          scrambledTokens: [
            { id: 't1', text: 'The' },
            { id: 't2', text: 'big' },
            { id: 't3', text: 'elephant' },
            { id: 't4', text: 'drinks' },
            { id: 't5', text: 'cold' },
            { id: 't6', text: 'water' },
            { id: 't7', text: '.', isPunctuation: true },
            { id: 't8', text: 'drink', isDistractor: true }
          ],
          grammarFocus: 'to_be_copula',
          capitalizationTipHe: 'The מתחיל באות T גדולה.',
          ruleExplanationHe: 'הפיל הוא יחיד, לכן הפועל חייב להסתיים ב-s: drinks!',
          audioFullSentence: 'The big elephant drinks cold water.'
        }
      ],
      suffixItems: [
        { id: 'suf-12', baseWord: 'drink', targetSuffix: '-s', fullWord: 'drinks', hebrewMeaning: 'שותה (יחיד)', ruleHintHe: 'הוספת s להרגל של יחיד' },
        { id: 'suf-13', baseWord: 'sleep', targetSuffix: '-s', fullWord: 'sleeps', hebrewMeaning: 'ישן (יחיד)', ruleHintHe: 'הוספת s ליחיד בהווה' }
      ],
      vocabulary: [
        { id: 'v6_1', word: 'Lion', partOfSpeech: 'noun', hebrewTranslation: 'אריה', ipa: '/ˈlaɪən/', exampleSentenceEn: 'The lion is king of the jungle.', exampleSentenceHe: 'האריה הוא מלך הג׳ונגל.', band: 'Band I', category: 'חיות' },
        { id: 'v6_2', word: 'Elephant', partOfSpeech: 'noun', hebrewTranslation: 'פיל', ipa: '/ˈelɪfənt/', phoneticTrap: 'F', hebrewPhoneticTip: 'אותיות ph נשמעות כמו F.', exampleSentenceEn: 'An elephant has large ears.', exampleSentenceHe: 'לפיל יש אוזניים גדולות.', band: 'Band I', category: 'חיות' },
        { id: 'v6_3', word: 'Monkey', partOfSpeech: 'noun', hebrewTranslation: 'קוף', ipa: '/ˈmʌŋki/', exampleSentenceEn: 'The monkey climbs the green tree.', exampleSentenceHe: 'הקוף מטפס על העץ הירוק.', band: 'Band I', category: 'חיות' },
        { id: 'v6_4', word: 'Zebra', partOfSpeech: 'noun', hebrewTranslation: 'זברה', ipa: '/ˈzebrə/', exampleSentenceEn: 'A zebra has black and white stripes.', exampleSentenceHe: 'לזברה יש פסים שחורים ולבנים.', band: 'Band I', category: 'חיות' },
        { id: 'v6_5', word: 'Water', partOfSpeech: 'noun', hebrewTranslation: 'מים', ipa: '/ˈwɔːtər/', exampleSentenceEn: 'Drink clean fresh water.', exampleSentenceHe: 'שתו מים טריים ונקיים.', band: 'Band I', category: 'אוכל' },
        { id: 'v6_6', word: 'Morning', partOfSpeech: 'noun', hebrewTranslation: 'בוקר', ipa: '/ˈmɔːrnɪŋ/', exampleSentenceEn: 'Good morning to all students.', exampleSentenceHe: 'בוקר טוב לכל התלמידים.', band: 'Band I', category: 'זמן' },
        { id: 'v6_7', word: 'Night', partOfSpeech: 'noun', hebrewTranslation: 'לילה', ipa: '/naɪt/', exampleSentenceEn: 'Stars shine in the dark night.', exampleSentenceHe: 'כוכבים זורחים בלילה החשוך.', band: 'Band I', category: 'זמן' },
        { id: 'v6_8', word: 'Drink', partOfSpeech: 'verb', hebrewTranslation: 'לשתות', ipa: '/drɪŋk/', exampleSentenceEn: 'I drink orange juice for breakfast.', exampleSentenceHe: 'אני שותה מיץ תפוזים לארוחת בוקר.', band: 'Band I', category: 'פעולות' },
        { id: 'v6_9', word: 'Walk', partOfSpeech: 'verb', hebrewTranslation: 'ללכת ברגל', ipa: '/wɔːk/', exampleSentenceEn: 'We walk together in the park.', exampleSentenceHe: 'אנחנו הולכים יחד בפארק.', band: 'Band I', category: 'פעולות' },
        { id: 'v6_10', word: 'Sun', partOfSpeech: 'noun', hebrewTranslation: 'שמש', ipa: '/sʌn/', exampleSentenceEn: 'The sun rises in the morning.', exampleSentenceHe: 'השמש זורחת בבוקר.', band: 'Band I', category: 'טבע' },
        { id: 'v6_11', word: 'Big', partOfSpeech: 'adjective', hebrewTranslation: 'גדול', ipa: '/bɪɡ/', phoneticTrap: 'B', exampleSentenceEn: 'The elephant is very big.', exampleSentenceHe: 'הפיל גדול מאוד.', band: 'Band I', category: 'תכונות' },
        { id: 'v6_12', word: 'Small', partOfSpeech: 'adjective', hebrewTranslation: 'קטן', ipa: '/smɔːl/', exampleSentenceEn: 'The mouse is very small.', exampleSentenceHe: 'העכבר קטן מאוד.', band: 'Band I', category: 'תכונות' }
      ]
    }
  ]
};
