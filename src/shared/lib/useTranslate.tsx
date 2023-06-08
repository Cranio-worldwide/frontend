import React, { useContext } from 'react';
import { path } from '@/shared/lib/path';

const TranslationContext = React.createContext(null);

export function TranslationProvider({ locale, children }) {
  return <TranslationContext.Provider value={locale}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const locale = useContext(TranslationContext);
  return (p: string[]) => {
    try {
      const result = path(locale, p);
      if (typeof result !== 'string') {
        throw new Error('not found: ' + p);
      }
      return result;
    } catch (e) {
      console.warn(e);
      return p.at(-1);
    }
  };
}
