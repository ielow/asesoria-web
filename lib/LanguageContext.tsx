'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const currentLocale = useLocale();
  const [language, setLanguageState] = useState(currentLocale || 'es');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLanguageState(currentLocale || 'es');
  }, [currentLocale]);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Cambiar la URL si es necesario
    const currentPath = pathname.replace(/^\/(es|en)/, '') || '/';
    if (lang !== 'es') {
      router.push(`/${lang}${currentPath}`);
    } else {
      router.push(currentPath);
    }
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
