import React, { useState } from 'react';
import { Sparkles, Flame, Database, Monitor, Tablet, Smartphone, Compass, Users, Volume2, VolumeX, Trophy, Headphones, BookOpen, FileText, Mic, Gamepad2 } from 'lucide-react';
import { CurriculumUnit } from '../types/curriculum';
import { isSoundMuted, toggleSoundMute, playGentleSuccessTone } from '../utils/audio';
import { VoiceSettingsModal } from './VoiceSettingsModal';

export type ActiveTab = 'roadmap' | 'phonics' | 'verb_to_be' | 'sentence_builder' | 'suffix_collector' | 'vocab_glossary' | 'vocab_challenge' | 'unseen_lab' | 'cobe_oral' | 'achievements' | 'leaderboard' | 'parent_portal';
export type DeviceMode = 'fluid' | 'tablet_landscape' | 'tablet_portrait' | 'mobile';

interface TabletHeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  units: CurriculumUnit[];
  currentUnitId: string;
  onSelectUnit: (unitId: string) => void;
  xpPoints: number;
  streakDays: number;
  deviceMode: DeviceMode;
  onDeviceModeChange: (mode: DeviceMode) => void;
  onOpenSchemaModal: () => void;
}

export const TabletHeader: React.FC<TabletHeaderProps> = ({
  activeTab,
  onTabChange,
  units,
  currentUnitId,
  onSelectUnit,
  xpPoints,
  streakDays,
  deviceMode,
  onDeviceModeChange,
  onOpenSchemaModal
}) => {
  const currentUnit = units.find(u => u.id === currentUnitId) || units[0];
  const [muted, setMuted] = useState(isSoundMuted());
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const handleToggleMute = () => {
    const newMuted = toggleSoundMute();
    setMuted(newMuted);
    if (!newMuted) {
      playGentleSuccessTone();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-3 sm:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Zone 1: Brand Wordmark & Unit Selector */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onTabChange('roadmap')}
            className="flex items-center gap-2.5 cursor-pointer text-right group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 text-white font-black flex items-center justify-center text-lg shadow-sm shadow-sky-600/30 font-english group-hover:scale-105 transition-transform">
              SE
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Sababa English
                </span>
                <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md">
                  Band I
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium block">
                כיתות ד׳-ה׳ · יסודי
              </span>
            </div>
          </button>

          {/* Unit Selector Dropdown */}
          <div className="hidden xl:flex items-center gap-1.5 pr-3 border-r border-slate-200">
            <span className="text-xs text-slate-400 font-medium font-hebrew">יחידה:</span>
            <select
              value={currentUnitId}
              onChange={(e) => onSelectUnit(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-2.5 py-1.5 rounded-xl border border-slate-200 outline-none cursor-pointer"
            >
              {units.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.unitNumber}. {u.titleHe}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Zone 2: Navigation Tabs (Single-Line, Ergonomic) */}
        <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-100/90 rounded-2xl">
          <button
            onClick={() => onTabChange('roadmap')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'roadmap'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>מפת המסע</span>
          </button>

          <button
            onClick={() => onTabChange('phonics')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'phonics'
                ? 'bg-white text-sky-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            אתגר צלילים
          </button>

          <button
            onClick={() => onTabChange('verb_to_be')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'verb_to_be'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            טכנאי פועל עזר
          </button>

          <button
            onClick={() => onTabChange('sentence_builder')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'sentence_builder'
                ? 'bg-white text-violet-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            בנאי משפטים
          </button>

          <button
            onClick={() => onTabChange('suffix_collector')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'suffix_collector'
                ? 'bg-white text-amber-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            אוסף סיומות
          </button>

          <button
            onClick={() => onTabChange('vocab_glossary')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'vocab_glossary'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-rose-500" />
            <span>אוצר מילים</span>
          </button>

          <button
            onClick={() => onTabChange('vocab_challenge')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'vocab_challenge'
                ? 'bg-white text-amber-700 shadow-xs ring-1 ring-amber-300'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 text-amber-500" />
            <span>אתגר תמונה-מילה</span>
          </button>

          <button
            onClick={() => onTabChange('unseen_lab')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'unseen_lab'
                ? 'bg-white text-teal-700 shadow-xs ring-1 ring-teal-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span>הבנת הנקרא Unseen</span>
          </button>

          <button
            onClick={() => onTabChange('cobe_oral')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'cobe_oral'
                ? 'bg-white text-indigo-700 shadow-xs ring-1 ring-indigo-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-indigo-600" />
            <span>דיבור COBE</span>
          </button>

          <button
            onClick={() => onTabChange('achievements')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'achievements'
                ? 'bg-white text-amber-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>תגים והישגים</span>
          </button>

          <button
            onClick={() => onTabChange('leaderboard')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'leaderboard'
                ? 'bg-white text-amber-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>לוח מובילים</span>
          </button>

          <button
            onClick={() => onTabChange('parent_portal')}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'parent_portal'
                ? 'bg-white text-indigo-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>הורים ומורים</span>
          </button>
        </nav>

        {/* Zone 3: Gamification Metrics & Tools */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Device Simulator Toggle */}
          <div className="hidden sm:flex items-center gap-0.5 p-1 bg-slate-100 rounded-xl" title="סימולטור תצוגה">
            <button
              onClick={() => onDeviceModeChange('fluid')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceMode === 'fluid' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-400 hover:text-slate-700'
              }`}
              title="תצוגה רגילה מלאה (Fluid)"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDeviceModeChange('tablet_landscape')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceMode === 'tablet_landscape' ? 'bg-white text-sky-600 shadow-2xs' : 'text-slate-400 hover:text-slate-700'
              }`}
              title="טאבלט לרוחב (Tablet Landscape - מומלץ)"
            >
              <Tablet className="w-4 h-4 rotate-90" />
            </button>
            <button
              onClick={() => onDeviceModeChange('tablet_portrait')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceMode === 'tablet_portrait' ? 'bg-white text-sky-600 shadow-2xs' : 'text-slate-400 hover:text-slate-700'
              }`}
              title="טאבלט לאורך (Tablet Portrait)"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDeviceModeChange('mobile')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                deviceMode === 'mobile' ? 'bg-white text-sky-600 shadow-2xs' : 'text-slate-400 hover:text-slate-700'
              }`}
              title="סמארטפון (Mobile)"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>

          {/* Sound Mute/Unmute Toggle */}
          <button
            onClick={handleToggleMute}
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            title={muted ? 'הפעלת צלילי הצלחה והגייה' : 'השתקת צלילים'}
          >
            {muted ? (
              <VolumeX className="w-4 h-4 text-rose-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Voice Settings Selector */}
          <button
            onClick={() => setIsVoiceModalOpen(true)}
            className="p-2 text-slate-500 hover:text-sky-700 hover:bg-sky-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
            title="הגדרות קול והגייה (בחירת קול מורה נשי/גברי)"
          >
            <Headphones className="w-4 h-4 text-sky-600" />
            <span className="hidden xl:inline text-xs font-bold text-sky-700">קול מורה</span>
          </button>

          {/* Gamification Points Badge - clickable to view achievements */}
          <button
            onClick={() => onTabChange('achievements')}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100/80 text-amber-900 rounded-xl border border-amber-200/70 text-xs font-bold font-mono transition-colors cursor-pointer"
            title="צפייה בתגים והישגים"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>{xpPoints} XP</span>
          </button>

          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-orange-50 text-orange-900 rounded-xl border border-orange-200/70 text-xs font-bold font-mono">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-400" />
            <span>{streakDays}d</span>
          </div>

          {/* JSON Schema Modal Trigger */}
          <button
            onClick={onOpenSchemaModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            title="צפייה והורדת הסכמה של מודול משרד החינוך"
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden md:inline">JSON Schema</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Tab Bar */}
      <div className="flex lg:hidden items-center justify-between gap-2 overflow-x-auto mt-2 pt-2 border-t border-slate-100 pb-1 scrollbar-none">
        <select
          value={currentUnitId}
          onChange={(e) => onSelectUnit(e.target.value)}
          className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1.5 rounded-lg border border-slate-200 shrink-0"
        >
          {units.map((u) => (
            <option key={u.id} value={u.id}>
              יח׳ {u.unitNumber}: {u.titleHe}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onTabChange('roadmap')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'roadmap' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            מפה
          </button>
          <button
            onClick={() => onTabChange('phonics')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'phonics' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            צלילים
          </button>
          <button
            onClick={() => onTabChange('verb_to_be')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'verb_to_be' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            פועל עזר
          </button>
          <button
            onClick={() => onTabChange('sentence_builder')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'sentence_builder' ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            משפטים
          </button>
          <button
            onClick={() => onTabChange('suffix_collector')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'suffix_collector' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            סיומות
          </button>
          <button
            onClick={() => onTabChange('vocab_glossary')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'vocab_glossary' ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            אוצר מילים
          </button>
          <button
            onClick={() => onTabChange('vocab_challenge')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'vocab_challenge' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            אתגר מילים
          </button>
          <button
            onClick={() => onTabChange('unseen_lab')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'unseen_lab' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            הבנת הנקרא
          </button>
          <button
            onClick={() => onTabChange('cobe_oral')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'cobe_oral' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            דיבור COBE
          </button>
          <button
            onClick={() => onTabChange('achievements')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'achievements' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            הישגים
          </button>
          <button
            onClick={() => onTabChange('leaderboard')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'leaderboard' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            מובילים
          </button>
          <button
            onClick={() => onTabChange('parent_portal')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg whitespace-nowrap shrink-0 ${
              activeTab === 'parent_portal' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            דוח הורים
          </button>
        </div>
      </div>

      {/* Voice Settings & Pronunciation Modal */}
      <VoiceSettingsModal
        isOpen={isVoiceModalOpen}
        onClose={() => setIsVoiceModalOpen(false)}
      />
    </header>
  );
};
