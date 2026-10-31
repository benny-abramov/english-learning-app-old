import React from 'react';
import { Volume2, BookOpen, AlertCircle } from 'lucide-react';
import { Band1VocabWord } from '../types/curriculum';
import { speakEnglish } from '../utils/audio';

interface VocabGlossaryTabProps {
  vocabList: Band1VocabWord[];
}

export const VocabGlossaryTab: React.FC<VocabGlossaryTabProps> = ({ vocabList }) => {
  const handleListen = (word: string) => {
    speakEnglish(word, 0.82);
  };

  const handleListenSentence = (sentence: string) => {
    speakEnglish(sentence, 0.82);
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between gap-3 mb-1">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
            משרד החינוך · רשימת מילים Band I
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>10 מילות מפתח ממוקדות לכיתות ד׳-ה׳</span>
          </div>
        </div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
          אוצר מילים בסיסי עם מלכודות צליל P/F
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          לחצו על כפתור השמע להאזנה להגייה הנכונה של המילה ומשפט הדוגמה.
        </p>
      </div>

      {/* Vocabulary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {vocabList.map((item) => {
          const hasTrap = !!item.phoneticTrap;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-baseline gap-2.5 dir-ltr" dir="ltr">
                    <span className="text-2xl font-extrabold font-english text-slate-900 tracking-tight">
                      {item.word}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.ipa}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium px-2 py-0.5 rounded bg-slate-100 font-english">
                      {item.partOfSpeech}
                    </span>
                  </div>

                  <button
                    onClick={() => handleListen(item.word)}
                    className="p-2 text-sky-600 hover:text-sky-700 hover:bg-sky-50 rounded-xl transition-colors cursor-pointer shrink-0"
                    title="השמע מילה"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-1 text-base font-bold text-slate-800 font-hebrew">
                  {item.hebrewTranslation}
                </div>

                {/* Phonetic Trap Highlight */}
                {hasTrap && item.hebrewPhoneticTip && (
                  <div className="mt-2.5 flex items-start gap-1.5 p-2 bg-amber-50/70 rounded-xl border border-amber-200/50 text-[11px] text-amber-900">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold">מלכודת הגייה ({item.phoneticTrap}):</strong> {item.hebrewPhoneticTip}
                    </span>
                  </div>
                )}
              </div>

              {/* Example sentence */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="text-xs">
                  <p className="font-english text-slate-700 font-medium dir-ltr" dir="ltr">
                    &quot;{item.exampleSentenceEn}&quot;
                  </p>
                  <p className="text-[11px] text-slate-500 font-hebrew mt-0.5">
                    {item.exampleSentenceHe}
                  </p>
                </div>

                <button
                  onClick={() => handleListenSentence(item.exampleSentenceEn)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
                  title="השמע משפט דוגמה"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
