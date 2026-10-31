import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TabletHeader, ActiveTab, DeviceMode } from './components/TabletHeader';
import { PhonicsArena } from './components/PhonicsArena';
import { VerbToBeArena } from './components/VerbToBeArena';
import { SentenceBuilderArena } from './components/SentenceBuilderArena';
import { SuffixCollectorArena } from './components/SuffixCollectorArena';
import { VocabGlossaryTab } from './components/VocabGlossaryTab';
import { UnitRoadmap } from './components/UnitRoadmap';
import { ParentTeacherPortal } from './components/ParentTeacherPortal';
import { Achievements } from './components/Achievements';
import { DailyGoalWidget } from './components/DailyGoalWidget';
import { WeeklyConsistencyChart } from './components/WeeklyConsistencyChart';
import { ClassroomLeaderboard } from './components/ClassroomLeaderboard';
import { SchemaInspectorModal } from './components/SchemaInspectorModal';
import { fullCurriculumData } from './data/curriculumData';
import { playXpEarnedTone } from './utils/audio';
import { BookOpen, RotateCw, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('roadmap');
  const [currentUnitId, setCurrentUnitId] = useState<string>(fullCurriculumData.units[0].id);
  const [xpPoints, setXpPoints] = useState(480);
  const [completedExercisesToday, setCompletedExercisesToday] = useState(7);
  const [streakDays] = useState(5);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('fluid');
  const [isSchemaModalOpen, setIsSchemaModalOpen] = useState(false);

  const currentUnit = fullCurriculumData.units.find(u => u.id === currentUnitId) || fullCurriculumData.units[0];

  const handleReward = (points: number) => {
    setXpPoints(prev => prev + points);
    setCompletedExercisesToday(prev => prev + 1);
    playXpEarnedTone(points);
  };

  const handleSelectUnitFromRoadmap = (unitId: string) => {
    setCurrentUnitId(unitId);
    setActiveTab('phonics'); // Jump straight into the unit's exercises
  };

  // Content for the active module
  const renderActiveModule = () => {
    switch (activeTab) {
      case 'roadmap':
        return (
          <UnitRoadmap
            units={fullCurriculumData.units}
            currentUnitId={currentUnitId}
            onSelectUnit={handleSelectUnitFromRoadmap}
            xpPoints={xpPoints}
          />
        );
      case 'phonics':
        return (
          <PhonicsArena
            key={`phonics-${currentUnit.id}`}
            exercises={currentUnit.phonicsExercises}
            onReward={handleReward}
          />
        );
      case 'verb_to_be':
        return (
          <VerbToBeArena
            key={`verb-${currentUnit.id}`}
            exercises={currentUnit.verbExercises}
            onReward={handleReward}
          />
        );
      case 'sentence_builder':
        return (
          <SentenceBuilderArena
            key={`sentence-${currentUnit.id}`}
            exercises={currentUnit.sentenceExercises}
            onReward={handleReward}
          />
        );
      case 'suffix_collector':
        return (
          <SuffixCollectorArena
            key={`suffix-${currentUnit.id}`}
            items={currentUnit.suffixItems && currentUnit.suffixItems.length > 0 ? currentUnit.suffixItems : fullCurriculumData.units[1].suffixItems || []}
            onReward={handleReward}
          />
        );
      case 'vocab_glossary':
        return (
          <VocabGlossaryTab
            key={`vocab-${currentUnit.id}`}
            vocabList={currentUnit.vocabulary}
          />
        );
      case 'achievements':
        return (
          <Achievements
            xpPoints={xpPoints}
            streakDays={streakDays}
          />
        );
      case 'leaderboard':
        return (
          <ClassroomLeaderboard
            xpPoints={xpPoints}
            streakDays={streakDays}
            onNavigateToExercise={(tab) => setActiveTab(tab)}
          />
        );
      case 'parent_portal':
        return (
          <ParentTeacherPortal
            units={fullCurriculumData.units}
            xpPoints={xpPoints}
            streakDays={streakDays}
          />
        );
      default:
        return null;
    }
  };

  // Framer Motion animated container wrapper for smooth tab & unit transitions
  const renderAnimatedModuleContent = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeTab}-${currentUnit.id}`}
          initial={{ opacity: 0, y: 12, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.995 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {renderActiveModule()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-900 flex flex-col font-hebrew">
      {/* Top Application Bar */}
      <TabletHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        units={fullCurriculumData.units}
        currentUnitId={currentUnitId}
        onSelectUnit={setCurrentUnitId}
        xpPoints={xpPoints}
        streakDays={streakDays}
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
        onOpenSchemaModal={() => setIsSchemaModalOpen(true)}
      />

      {/* Main Viewport Area */}
      <main className="flex-1 py-4 sm:py-6 px-3 sm:px-6">
        {/* Device Simulator Frame (if toggled) */}
        {deviceMode === 'tablet_landscape' && (
          <div className="max-w-[1040px] mx-auto mb-4">
            <div className="bg-slate-800 p-4 sm:p-6 rounded-[36px] shadow-2xl border-4 border-slate-700">
              <div className="flex items-center justify-between text-slate-300 text-xs px-2 mb-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>iPad Air / Galaxy Tab (Landscape View 1024×768)</span>
                </span>
                <span className="text-slate-400">יחידה {currentUnit.unitNumber}: {currentUnit.titleHe}</span>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 overflow-hidden min-h-[580px]">
                {renderAnimatedModuleContent()}
              </div>
            </div>
          </div>
        )}

        {deviceMode === 'tablet_portrait' && (
          <div className="max-w-[768px] mx-auto mb-4">
            <div className="bg-slate-800 p-4 sm:p-5 rounded-[36px] shadow-2xl border-4 border-slate-700">
              <div className="flex items-center justify-between text-slate-300 text-xs px-2 mb-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                  <span>Tablet Portrait (768×1024)</span>
                </span>
                <button
                  onClick={() => setDeviceMode('tablet_landscape')}
                  className="flex items-center gap-1 text-sky-300 hover:text-white cursor-pointer font-hebrew text-xs"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>סובבו לרוחב לתרגול משפטים</span>
                </button>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 overflow-hidden min-h-[640px]">
                {renderAnimatedModuleContent()}
              </div>
            </div>
          </div>
        )}

        {deviceMode === 'mobile' && (
          <div className="max-w-[420px] mx-auto mb-4">
            <div className="bg-slate-900 p-3 sm:p-4 rounded-[42px] shadow-2xl border-4 border-slate-700">
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2.5"></div>
              <div className="bg-slate-50 rounded-3xl p-3.5 overflow-hidden min-h-[620px]">
                {renderAnimatedModuleContent()}
              </div>
            </div>
          </div>
        )}

        {deviceMode === 'fluid' && (
          <div className="max-w-6xl mx-auto space-y-4">
            {/* Daily Goal & Habit Tracker */}
            <DailyGoalWidget
              completedExercises={completedExercisesToday}
              currentXpEarnedToday={130}
              streakDays={streakDays}
            />

            {/* Analytics & Social Engagement Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <WeeklyConsistencyChart
                completedToday={completedExercisesToday}
                dailyGoal={5}
              />
              <ClassroomLeaderboard
                xpPoints={xpPoints}
                streakDays={streakDays}
                compact={true}
                onNavigateToExercise={(tab) => setActiveTab(tab)}
              />
            </div>

            {/* Quick Context & Active Unit Banner */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-sky-600 text-white font-bold font-mono text-xs flex items-center justify-center shrink-0">
                  {currentUnit.unitNumber}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-english">
                      Current Unit
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {currentUnit.titleHe}
                    </span>
                  </div>
                  <span className="text-xs text-sky-700 font-medium block">
                    {currentUnit.themeHe}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>כל 4 היחידות</span>
                </button>
                <button
                  onClick={() => setIsSchemaModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>סכמת JSON</span>
                </button>
              </div>
            </div>

            {/* Current Active Module Arena */}
            <div>
              {renderAnimatedModuleContent()}
            </div>
          </div>
        )}
      </main>

      {/* Curriculum Summary & Pedagogical Benchmark Strip */}
      <footer className="bg-white border-t border-slate-200/90 py-5 px-4 sm:px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-slate-700">
              Sababa English © 2026
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Ministry of Education Band I Curriculum (Units 1-4)</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>40+ Interactive Drills · CEFR A1-A2</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSchemaModalOpen(true)}
              className="text-sky-700 hover:text-sky-900 font-semibold cursor-pointer underline underline-offset-4"
            >
              Export Multi-Unit JSON
            </button>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Tablet Landscape Ready</span>
          </div>
        </div>
      </footer>

      {/* Interactive Curriculum JSON Schema Modal */}
      <SchemaInspectorModal
        isOpen={isSchemaModalOpen}
        onClose={() => setIsSchemaModalOpen(false)}
        moduleData={fullCurriculumData}
      />
    </div>
  );
}
