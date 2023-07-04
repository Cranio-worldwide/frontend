import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { AppProps } from 'next/app';
import { TranslationProvider } from '@/shared/lib/useTranslation';
import { MainLayout } from '@/components/MainLayout/MainLayout';

export default function App({ Component, pageProps: { locale, ...props } }: AppProps) {
  return (
    <MainLayout>
      <TranslationProvider locale={locale}>
        <Component {...props} />
      </TranslationProvider>
    </MainLayout>
  );
}
