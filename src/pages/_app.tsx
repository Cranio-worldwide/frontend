import '@/styles/globals.scss';
import '@/styles/reset.scss';

import { AppProps } from 'next/app';
import { TranslationProvider } from '@/shared/lib/useTranslation';
import { NewsContext } from '@/shared/contexts/newsContext';
import { MainLayout } from '@/components/MainLayout/MainLayout';
import { getNews } from '@/api/news/getNews';
import { loadLocales } from '@/shared/lib/loadLocales';
import { NewsPieceType } from '@/shared/types';

interface propsNews {
  news: NewsPieceType[];
}

export default function App(
  { Component, pageProps: { locale, ...props } }: AppProps,
  { news }: propsNews
) {
  return (
    <MainLayout>
      <TranslationProvider locale={locale}>
        <NewsContext.Provider value={news}>
          <Component {...props} />
        </NewsContext.Provider>
      </TranslationProvider>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const locale = await loadLocales(['main', 'search'], ctx.locale);
  const news = await getNews();

  return {
    props: {
      locale,
      news: news,
    },
  };
}
