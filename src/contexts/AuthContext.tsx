import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { 
  auth, 
  loginWithGoogle, 
  logoutUser, 
  getOrCreateStudentProfile, 
  saveStudentProfile, 
  StudentProfile,
  getTodayDateString
} from '../services/firebase';

interface AuthContextType {
  user: FirebaseUser | null;
  profile: StudentProfile | null;
  isLoading: boolean;
  isSyncing: boolean;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  updateClassCode: (newClassCode: string) => Promise<void>;
  updateDailyGoal: (newGoal: number) => Promise<void>;
  updateDisplayName: (newName: string) => Promise<void>;
  recordExerciseReward: (earnedXp: number) => Promise<{ newXp: number; newDone: number; newStreak: number }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Sync auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      if (firebaseUser) {
        setUser(firebaseUser);
        try {
          // Read local storage initial values if available to bootstrap seamlessly
          const localXp = parseInt(localStorage.getItem('sababa_xp') || '480', 10);
          const localStreak = parseInt(localStorage.getItem('sababa_streak') || '5', 10);
          const localDone = parseInt(localStorage.getItem('sababa_exercises_today') || '7', 10);
          const localClass = localStorage.getItem('sababa_class_code') || 'ד׳2';

          const studentProf = await getOrCreateStudentProfile(
            firebaseUser,
            localClass,
            localXp,
            localStreak,
            localDone
          );
          setProfile(studentProf);
        } catch (err) {
          console.error('Failed to load student profile from Firestore:', err);
        }
      } else {
        setUser(null);
        setProfile(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    setIsSyncing(true);
    try {
      const fbUser = await loginWithGoogle();
      setUser(fbUser);
      const studentProf = await getOrCreateStudentProfile(fbUser);
      setProfile(studentProf);
      setIsAuthModalOpen(false);
    } catch (err) {
      console.error('Sign-in error:', err);
      throw err;
    } finally {
      setIsSyncing(false);
    }
  };

  const signOut = async () => {
    setIsSyncing(true);
    try {
      await logoutUser();
      setUser(null);
      setProfile(null);
    } catch (err) {
      console.error('Sign-out error:', err);
      throw err;
    } finally {
      setIsSyncing(false);
    }
  };

  const updateClassCode = async (newClassCode: string) => {
    if (!profile) {
      localStorage.setItem('sababa_class_code', newClassCode);
      return;
    }
    const updated: StudentProfile = {
      ...profile,
      classCode: newClassCode,
      grade: newClassCode.includes('ה') ? '5th' : '4th'
    };
    setProfile(updated);
    setIsSyncing(true);
    try {
      await saveStudentProfile(updated);
      localStorage.setItem('sababa_class_code', newClassCode);
    } finally {
      setIsSyncing(false);
    }
  };

  const updateDailyGoal = async (newGoal: number) => {
    if (!profile) return;
    const updated: StudentProfile = {
      ...profile,
      dailyGoal: newGoal
    };
    setProfile(updated);
    setIsSyncing(true);
    try {
      await saveStudentProfile(updated);
    } finally {
      setIsSyncing(false);
    }
  };

  const updateDisplayName = async (newName: string) => {
    if (!profile) return;
    const updated: StudentProfile = {
      ...profile,
      displayName: newName
    };
    setProfile(updated);
    setIsSyncing(true);
    try {
      await saveStudentProfile(updated);
    } finally {
      setIsSyncing(false);
    }
  };

  const recordExerciseReward = async (earnedXp: number): Promise<{ newXp: number; newDone: number; newStreak: number }> => {
    const today = getTodayDateString();

    if (!profile) {
      // Offline / guest local calculation
      const curXp = parseInt(localStorage.getItem('sababa_xp') || '480', 10) + earnedXp;
      const curDone = parseInt(localStorage.getItem('sababa_exercises_today') || '7', 10) + 1;
      const curStreak = parseInt(localStorage.getItem('sababa_streak') || '5', 10);
      localStorage.setItem('sababa_xp', String(curXp));
      localStorage.setItem('sababa_exercises_today', String(curDone));
      return { newXp: curXp, newDone: curDone, newStreak: curStreak };
    }

    const isNewDay = profile.lastExerciseDate !== today;
    const updatedDone = isNewDay ? 1 : profile.dailyExercisesDone + 1;
    const updatedXp = profile.xp + earnedXp;
    const updatedStreak = isNewDay ? profile.streak + 1 : profile.streak;

    const updatedProfile: StudentProfile = {
      ...profile,
      xp: updatedXp,
      streak: updatedStreak,
      dailyExercisesDone: updatedDone,
      lastExerciseDate: today
    };

    setProfile(updatedProfile);

    // Save to Firestore in background without blocking UI
    saveStudentProfile(updatedProfile).catch((err) => {
      console.warn('Background sync to Firestore failed:', err);
    });

    return { newXp: updatedXp, newDone: updatedDone, newStreak: updatedStreak };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isLoading,
        isSyncing,
        isAuthModalOpen,
        setIsAuthModalOpen,
        signIn,
        signOut,
        updateClassCode,
        updateDailyGoal,
        updateDisplayName,
        recordExerciseReward
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
