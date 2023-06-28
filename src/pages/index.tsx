import { StartPage } from '@/components/StartPage';
import { loadLocales } from '@/shared/lib/loadLocales';
import { createContext } from 'react';
import { apiClient } from 'src/app/request/request';
export const NewsContext = createContext(null);

export default function Home({ news }) {
  return (
    <>
      <NewsContext.Provider value={news}>
        <StartPage />
      </NewsContext.Provider>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const locale = await loadLocales(['main', 'search'], ctx.locale);

  const response = await apiClient.get('/api/v1/news/');
  const news = await response.data;

  return {
    props: {
      locale,
      news,
    },
  };
}
