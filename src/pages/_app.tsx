import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { AppProps } from 'next/app';
import { TranslationProvider } from '@/shared/lib/useTranslate';

export default function App({ Component, pageProps: { locale, ...props } }: AppProps) {
  return (
    <TranslationProvider locale={locale}>
      <Component {...props} />
    </TranslationProvider>
  );
}
