import { getNews } from '@/api/news/getNews';
import { NewsPage } from '@/components/NewsPage/NewsPage';
import { NewsContext } from '@/shared/contexts/newsContext';
import { loadLocales } from '@/shared/lib/loadLocales';
import { NewsPieceType } from '@/shared/types';

interface propsNews {
  news: NewsPieceType[];
}
const AllNews = ({ news }: propsNews) => {
  return (
    <NewsContext.Provider value={news}>
      <NewsPage />
    </NewsContext.Provider>
  );
};

export default AllNews;

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
