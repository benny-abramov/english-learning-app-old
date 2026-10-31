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
        'Master 40 high-frequency Ministry of Education Band I foundational words.'
      ],
      he: [
        'שליטה ב-4 מלכודות ההגייה של ישראלים: P מול F, B מול V, תנועות קצרות וארוכות (ship/sheep), וצליל TH.',
        'התגברות על השמטת פועל עזר בהווה (Zero Copula) בהווה פשוט ובהווה ממושך (Present Progressive).',
        'הוספת סיומות ריבוי (-s, -es) ושמות עצם יוצאי דופן (children, feet) בהתאמה לפועל.',
        'בניית משפטי חיווי, שלילה ושאלות משמאל לימין תוך הקפדה על אותיות רישיות וסימני פיסוק.',
        'שליטה ב-40 מילות ליבה חיוניות מרשימת Band I של משרד החינוך.'
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
        { id: 'v1', word: 'Family', partOfSpeech: 'noun', hebrewTranslation: 'משפחה', ipa: '/ˈfæməli/', phoneticTrap: 'F', hebrewPhoneticTip: 'מתחיל ב-F (שיניים על שפה).', exampleSentenceEn: 'I love my family.', exampleSentenceHe: 'אני אוהב את המשפחה שלי.', band: 'Band I' },
        { id: 'v2', word: 'Park', partOfSpeech: 'noun', hebrewTranslation: 'פארק', ipa: '/pɑːrk/', phoneticTrap: 'P', hebrewPhoneticTip: 'מתחיל ב-P (שפתיים נסגרות).', exampleSentenceEn: 'Let us run to the park.', exampleSentenceHe: 'בואו נרוץ לפארק.', band: 'Band I' },
        { id: 'v3', word: 'Friend', partOfSpeech: 'noun', hebrewTranslation: 'חבר', ipa: '/frend/', phoneticTrap: 'F', hebrewPhoneticTip: 'מתחיל באות F.', exampleSentenceEn: 'Maya is my best friend.', exampleSentenceHe: 'מאיה היא החברה הכי טובה שלי.', band: 'Band I' },
        { id: 'v4', word: 'Happy', partOfSpeech: 'adjective', hebrewTranslation: 'שמח', ipa: '/ˈhæpi/', phoneticTrap: 'P', hebrewPhoneticTip: 'אות P כפולה באמצע.', exampleSentenceEn: 'I am happy today.', exampleSentenceHe: 'אני שמח היום.', band: 'Band I' }
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
        { id: 'v5', word: 'Banana', partOfSpeech: 'noun', hebrewTranslation: 'בננה', ipa: '/bəˈnænə/', phoneticTrap: 'B', hebrewPhoneticTip: 'אות B חזקה עם שפתיים.', exampleSentenceEn: 'The monkey eats a banana.', exampleSentenceHe: 'הקוף אוכל בננה.', band: 'Band I' },
        { id: 'v6', word: 'Very', partOfSpeech: 'adjective', hebrewTranslation: 'מאוד', ipa: '/ˈveri/', phoneticTrap: 'V', hebrewPhoneticTip: 'מתחיל באות V.', exampleSentenceEn: 'It is very cold outside.', exampleSentenceHe: 'קר מאוד בחוץ.', band: 'Band I' },
        { id: 'v7', word: 'Run', partOfSpeech: 'verb', hebrewTranslation: 'לרוץ', ipa: '/rʌn/', exampleSentenceEn: 'The children run fast.', exampleSentenceHe: 'הילדים רצים מהר.', band: 'Band I' },
        { id: 'v8', word: 'Read', partOfSpeech: 'verb', hebrewTranslation: 'לקרוא', ipa: '/riːd/', exampleSentenceEn: 'I read stories.', exampleSentenceHe: 'אני קורא סיפורים.', band: 'Band I' }
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
        { id: 'v9', word: 'Child', partOfSpeech: 'noun', hebrewTranslation: 'ילד / ילדה', ipa: '/tʃaɪld/', exampleSentenceEn: 'The child is smiling.', exampleSentenceHe: 'הילד מחייך.', band: 'Band I' },
        { id: 'v10', word: 'Children', partOfSpeech: 'noun', hebrewTranslation: 'ילדים', ipa: '/ˈtʃɪldrən/', exampleSentenceEn: 'The children play football.', exampleSentenceHe: 'הילדים משחקים כדורגל.', band: 'Band I' },
        { id: 'v11', word: 'Book', partOfSpeech: 'noun', hebrewTranslation: 'ספר', ipa: '/bʊk/', exampleSentenceEn: 'Open your book.', exampleSentenceHe: 'פתחו את הספר.', band: 'Band I' }
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
        { id: 'v12', word: 'Three', partOfSpeech: 'noun', hebrewTranslation: 'שלוש (3)', ipa: '/θriː/', phoneticTrap: 'TH', hebrewPhoneticTip: 'אותיות TH עם לשון בין השיניים.', exampleSentenceEn: 'I have three pencils.', exampleSentenceHe: 'יש לי שלושה עפרונות.', band: 'Band I' },
        { id: 'v13', word: 'Where', partOfSpeech: 'pronoun', hebrewTranslation: 'איפה / להיכן', ipa: '/weər/', exampleSentenceEn: 'Where is my friend?', exampleSentenceHe: 'איפה החבר שלי?', band: 'Band I' },
        { id: 'v14', word: 'Thank you', partOfSpeech: 'verb', hebrewTranslation: 'תודה רבה', ipa: '/ˈθæŋk juː/', phoneticTrap: 'TH', exampleSentenceEn: 'Thank you very much.', exampleSentenceHe: 'תודה רבה לך.', band: 'Band I' }
      ]
    }
  ]
};
