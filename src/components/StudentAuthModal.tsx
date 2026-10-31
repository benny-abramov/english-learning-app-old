import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CloudCheck, 
  ShieldCheck, 
  LogOut, 
  GraduationCap, 
  Users, 
  Trophy, 
  Flame, 
  Check, 
  RefreshCw 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface StudentAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_CLASSES = [
  { id: 'ד׳1', label: 'כיתה ד׳1', grade: '4th' },
  { id: 'ד׳2', label: 'כיתה ד׳2', grade: '4th' },
  { id: 'ד׳3', label: 'כיתה ד׳3', grade: '4th' },
  { id: 'ה׳1', label: 'כיתה ה׳1', grade: '5th' },
  { id: 'ה׳2', label: 'כיתה ה׳2', grade: '5th' },
  { id: 'ה׳3', label: 'כיתה ה׳3', grade: '5th' },
];

export const StudentAuthModal: React.FC<StudentAuthModalProps> = ({ isOpen, onClose }) => {
  const { user, profile, signIn, signOut, updateClassCode, updateDisplayName, isSyncing } = useAuth();
  const [selectedClass, setSelectedClass] = useState<string>(profile?.classCode || 'ד׳2');
  const [customName, setCustomName] = useState<string>(profile?.displayName || '');
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setAuthError(null);
    try {
      await signIn();
    } catch (err: unknown) {
      const errObj = err as { code?: string; message?: string };
      const code = errObj?.code || '';
      const msg = errObj?.message || '';

      if (code === 'auth/unauthorized-domain' || msg.includes('unauthorized-domain')) {
        setAuthError('דומיין זה טרם הוגדר ב-Firebase Console: יש להוסיף את כתובת הדומיין של Vercel תחת Firebase Console > Authentication > Settings > Authorized domains.');
      } else if (code === 'auth/popup-closed-by-user' || msg.includes('popup-closed-by-user')) {
        setAuthError('חלון ההתחברות נסגר על ידי המשתמש. אנא נסו שוב.');
      } else {
        setAuthError(`אירעה שגיאה בהתחברות Google: ${msg || 'אנא נסו שוב.'}`);
      }
    }
  };

  const handleSelectClass = async (classId: string) => {
    setSelectedClass(classId);
    await updateClassCode(classId);
  };

  const handleSaveName = async () => {
    if (customName.trim()) {
      await updateDisplayName(customName.trim());
      setIsEditingName(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-right"
        dir="rtl"
      >
        {/* Header Ribbon */}
        <div className="relative bg-gradient-to-r from-sky-600 via-indigo-600 to-indigo-700 text-white p-6 pb-7">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="סגור"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black tracking-tight">
                  {user ? 'פרופיל תלמיד/ה מסונכרן' : 'התחברות תלמידי כיתה'}
                </h2>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-md uppercase font-mono">
                  Firebase Cloud
                </span>
              </div>
              <p className="text-xs text-sky-100 mt-1">
                סנכרון יעד תרגילים יומי ולוח מובילים כיתתי בזמן אמת
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {authError && (
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
              {authError}
            </div>
          )}

          {user && profile ? (
            /* Signed In State */
            <div className="space-y-5">
              {/* Profile Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-sky-50/70 border border-indigo-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {profile.photoURL ? (
                    <img 
                      src={profile.photoURL} 
                      alt={profile.displayName} 
                      className="w-13 h-13 rounded-2xl border-2 border-indigo-300 shadow-xs object-cover"
                    />
                  ) : (
                    <div className="w-13 h-13 rounded-2xl bg-indigo-600 text-white font-black flex items-center justify-center text-xl shadow-xs">
                      {profile.displayName.charAt(0)}
                    </div>
                  )}

                  <div>
                    {isEditingName ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={customName}
                          onChange={(e) => setCustomName(e.target.value)}
                          className="text-xs font-bold bg-white border border-indigo-300 rounded-lg px-2 py-1 outline-none"
                          maxLength={30}
                        />
                        <button
                          onClick={handleSaveName}
                          className="px-2 py-1 bg-indigo-600 text-white rounded-lg text-xs font-bold"
                        >
                          שמור
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <span className="text-base font-black text-slate-900">
                          {profile.displayName}
                        </span>
                        <button 
                          onClick={() => {
                            setCustomName(profile.displayName);
                            setIsEditingName(true);
                          }}
                          className="text-[11px] text-indigo-600 hover:underline font-medium cursor-pointer"
                        >
                          (ערוך)
                        </button>
                      </div>
                    )}
                    <span className="text-xs text-slate-500 block truncate max-w-[200px]">
                      {profile.email}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                        <CloudCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>מסונכרן בענן</span>
                      </span>
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100/70 px-2 py-0.5 rounded-md font-hebrew">
                        {profile.classCode}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={signOut}
                  disabled={isSyncing}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-rose-700 bg-white hover:bg-rose-50 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  title="התנתקות"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">התנתק</span>
                </button>
              </div>

              {/* Real-time stats summary */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-amber-600 mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold font-hebrew">סך ניקוד</span>
                  </div>
                  <span className="text-lg font-black font-mono text-amber-900">
                    {profile.xp} XP
                  </span>
                </div>

                <div className="p-3 bg-orange-50 rounded-2xl border border-orange-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-orange-600 mb-0.5">
                    <Flame className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold font-hebrew">רצף פעיל</span>
                  </div>
                  <span className="text-lg font-black font-mono text-orange-900">
                    {profile.streak} ימים
                  </span>
                </div>

                <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 text-center">
                  <div className="flex items-center justify-center gap-1 text-sky-600 mb-0.5">
                    <Trophy className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold font-hebrew">היום הושלמו</span>
                  </div>
                  <span className="text-lg font-black font-mono text-sky-900">
                    {profile.dailyExercisesDone}/{profile.dailyGoal}
                  </span>
                </div>
              </div>

              {/* Classroom Assignment Section */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span>שיוך כיתתי ללוח המובילים (Classroom Leaderboard):</span>
                  </label>
                  <span className="text-[11px] text-slate-400">בחר את כיתתך</span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {PRESET_CLASSES.map((cls) => {
                    const isSelected = (profile.classCode === cls.id) || (selectedClass === cls.id);
                    return (
                      <button
                        key={cls.id}
                        onClick={() => handleSelectClass(cls.id)}
                        disabled={isSyncing}
                        className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/30'
                            : 'bg-slate-50 hover:bg-indigo-50 text-slate-700 border-slate-200'
                        }`}
                      >
                        {cls.label}
                        {isSelected && <Check className="w-3 h-3 mx-auto mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Logged Out / Invitation State */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-3xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-3xl shadow-inner">
                  🔐
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  התחברו כדי לשמור את ההתקדמות ולהשתתף בתחרות הכיתתית
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  ההתחברות מתבצעת באופן מאובטח באמצעות חשבון Google של בית הספר או ההורים דרך בסיס הנתונים של Firebase.
                </p>
              </div>

              {/* 3 Pillar Features */}
              <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block">יעד תרגילים יומי מסונכרן בכל המכשירים:</strong>
                    <span className="text-slate-600">מתרגלים בבית הספר במחשב וממשיכים בבית בטאבלט או בטלפון — הרצף (Streak) לא נמחק!</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block">לוח מובילים כיתתי חי (Live Leaderboard):</strong>
                    <span className="text-slate-600">רואים את כל החברים לכיתה (ד׳1, ד׳2 וכו׳) מתחרים על ה-XP המוביל בזמן אמת!</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block">שמירת מילים ותרגול אישי:</strong>
                    <span className="text-slate-600">אוצר המילים שלמדתם וציוני הבנת הנקרא שמורים תמיד בחשבונכם האישי.</span>
                  </div>
                </div>
              </div>

              {/* Google Sign-In Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={isSyncing}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border-2 border-slate-300 hover:border-indigo-500 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                {/* Google "G" Icon */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>התחברות מהירה עם חשבון Google</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>הגנה על פרטיות תלמידים לפי הנחיות אבטחת מידע לחינוך</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>מסד נתונים Firestore פעיל</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-200/70 border border-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            סגור
          </button>
        </div>
      </div>
    </div>
  );
};
