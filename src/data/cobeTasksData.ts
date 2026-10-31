import { CobeOralTask } from '../types/readingAndOral';

export const cobeTasksData: CobeOralTask[] = [
  {
    id: 'cobe-task-1',
    taskNumber: 1,
    category: 'interview',
    titleEn: 'Personal Interview: My Best Friend',
    titleHe: 'חלק א׳: ראיון אישי - החבר/ה הכי טוב/ה שלי',
    instructionHe: 'הקשיבו לשאלת הבוחן/ת, קראו את ביטויי הפתיחה, הקליטו את תשובתכם בעל פה וצברו נקודות!',
    examinerPromptEn: 'Hello! Please tell me about your best friend or a family member. What do you like doing together, and why are they special to you?',
    examinerPromptHe: 'שלום! ספר/י לי על החבר/ה הכי טוב/ה שלך או בן משפחה. מה אתם אוהבים לעשות יחד, ומדוע הוא/היא מיוחד/ת בעיניך?',
    audioPromptEn: 'Hello! Please tell me about your best friend or a family member. What do you like doing together, and why are they special to you?',
    guideQuestionsHe: [
      'מי החבר/ה ואיך הכרתם? (Who is your friend?)',
      'מה אתם נהנים לעשות בשעות אחר הצהריים? (What activities do you enjoy together?)',
      'אילו תכונות אופי את/ה מעריך/ה בו/בה? (kind, funny, helpful, honest)'
    ],
    suggestedStartersEn: [
      'My best friend’s name is...',
      'We have known each other for...',
      'In our free time, we usually enjoy...',
      'He / She is very special to me because he / she is always...'
    ],
    modelAnswerEn: 'My best friend is Daniel. We have been friends for three years since elementary school. In our free time, we love riding bikes together and building computer games. He is very special to me because he is funny, kind, and always helps me when I have homework difficulties.',
    modelAnswerHe: 'החבר הכי טוב שלי הוא דניאל. אנחנו חברים שלוש שנים מבית הספר היסודי. בזמננו הפנוי אנחנו אוהבים לרכוב על אופניים יחד ולבנות משחקי מחשב. הוא מיוחד מאוד בעיניי כיוון שהוא מצחיק, אדיב ותמיד עוזר לי כשאני מתקשה בשיעורי בית.',
    keyVocabulary: [
      { wordEn: 'Best friend', meaningHe: 'החבר/ה הכי טוב/ה' },
      { wordEn: 'Elementary school', meaningHe: 'בית ספר יסודי' },
      { wordEn: 'Free time', meaningHe: 'זמן פנוי' },
      { wordEn: 'Helpful & kind', meaningHe: 'עוזר/ת ואדיב/ה' }
    ],
    prepTimeSeconds: 45,
    speakTimeSeconds: 60,
    points: 40
  },
  {
    id: 'cobe-task-2',
    taskNumber: 2,
    category: 'picture_project',
    titleEn: 'Project Presentation: An Exciting Science Fair',
    titleHe: 'חלק ב׳: הצגת פרויקט - יריד מדעים מרתק',
    instructionHe: 'תארו פרויקט או ניסוי מעניין שלקחתם בו חלק בבית הספר. מה למדתם ומה היה החלק הכי מעניין?',
    examinerPromptEn: 'Tell me about an interesting project or experiment you did at school. What was the subject, what did you create, and what did you learn from it?',
    examinerPromptHe: 'ספר/י לי על פרויקט או ניסוי מעניין שעשית בבית הספר. מה היה הנושא, מה יצרתם ומה למדת מזה?',
    audioPromptEn: 'Tell me about an interesting project or experiment you did at school. What was the subject, what did you create, and what did you learn from it?',
    guideQuestionsHe: [
      'מה היה נושא הפרויקט? (Green energy, space, animals, history)',
      'האם עבדת לבד או בקבוצה? (I worked with my classmates)',
      'מה יצרתם בסוף? (A model, a poster, a presentation)'
    ],
    suggestedStartersEn: [
      'Last semester, our class worked on a project about...',
      'Together with my group, we decided to create...',
      'The most interesting part of the experiment was...',
      'From this project, I learned that...'
    ],
    modelAnswerEn: 'Last month, our class participated in an exciting science fair. My group built a model of a solar water filter. We used sand, charcoal, and sunlight to purify dirty water. The most interesting part was testing the clean water with a microscope. I learned that green technology can solve real water problems in the world.',
    modelAnswerHe: 'בחודש שעבר כיתתנו השתתפה ביריד מדעים מרגש. הקבוצה שלי בנתה דגם של מסנן מים סולארי. השתמשנו בחול, פחם ואור שמש כדי לטהר מים עכורים. החלק המעניין ביותר היה לבדוק את המים הנקיים במיקרוסקופ. למדתי שטכנולוגיה ירוקה יכולה לפתור בעיות מים אמיתיות בעולם.',
    keyVocabulary: [
      { wordEn: 'Science fair', meaningHe: 'יריד מדעים' },
      { wordEn: 'Experiment', meaningHe: 'ניסוי' },
      { wordEn: 'Solar filter', meaningHe: 'מסנן סולארי' },
      { wordEn: 'Solve problems', meaningHe: 'לפתור בעיות' }
    ],
    prepTimeSeconds: 60,
    speakTimeSeconds: 75,
    points: 40
  },
  {
    id: 'cobe-task-3',
    taskNumber: 3,
    category: 'dilemma_opinion',
    titleEn: 'Opinion & Debate: Tablets vs Paper Notebooks',
    titleHe: 'חלק ג׳: דילמה והבעת דעה - טאבלטים מול מחברות נייר',
    instructionHe: 'הביעו את עמדתכם בנושא החלפת מחברות בטאבלטים בבית הספר, ונמקו עם שני טיעונים ברורים באנגלית.',
    examinerPromptEn: 'Some schools want to replace all paper notebooks with digital tablets. In your opinion, is this a good idea? Please give two reasons to explain your view.',
    examinerPromptHe: 'יש בתי ספר שרוצים להחליף את כל מחברות הנייר בטאבלטים דיגיטליים. לדעתך, האם זה רעיון טוב? אנא ציין/י שתי סיבות להסבר עמדתך.',
    audioPromptEn: 'Some schools want to replace all paper notebooks with digital tablets. In your opinion, is this a good idea? Please give two reasons to explain your view.',
    guideQuestionsHe: [
      'האם את/ה בעד או נגד? (In my opinion, I agree / disagree)',
      'טיעון ראשון: משקל הילקוט / שמירה על עצים מול עייפות העיניים (Heavy bag vs eye strain)',
      'טיעון שני: אפליקציות אינטראקטיביות מול הסחות דעת (Interactive apps vs distractions)'
    ],
    suggestedStartersEn: [
      'In my opinion, using tablets instead of notebooks is...',
      'First of all, tablets make schoolbags lighter and save...',
      'Secondly, interactive learning apps help students...',
      'However, some people worry about screen time and...'
    ],
    modelAnswerEn: 'In my opinion, using tablets in school is a great idea for two main reasons. First of all, students do not need to carry heavy bags with ten heavy books and notebooks every morning. Secondly, digital apps are interactive, exciting, and save thousands of trees from being cut down for paper. Therefore, I believe modern schools should embrace tablets.',
    modelAnswerHe: 'לדעתי, שימוש בטאבלטים בבית הספר הוא רעיון מעולה משתי סיבות עיקריות. קודם כל, תלמידים לא צריכים לסחוב ילקוט כבד עם עשרה ספרים ומחברות כל בוקר. שנית, אפליקציות דיגיטליות הן אינטראקטיביות, מלהיבות וחוסכות כריתת אלפי עצים לנייר. לכן, אני מאמין שבתי ספר מודרניים צריכים לאמץ טאבלטים.',
    keyVocabulary: [
      { wordEn: 'In my opinion', meaningHe: 'לדעתי' },
      { wordEn: 'First of all', meaningHe: 'קודם כל / ראשית' },
      { wordEn: 'Heavy schoolbags', meaningHe: 'ילקוטים כבדים' },
      { wordEn: 'Save trees', meaningHe: 'להציל עצים' }
    ],
    prepTimeSeconds: 60,
    speakTimeSeconds: 75,
    points: 40
  }
];
