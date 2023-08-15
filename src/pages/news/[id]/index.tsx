import { getNews } from '@/api/news/getNews';
import { getNewsById } from '@/api/news/getNewsById';
import { NewsPiecePage } from '@/components/NewsPiecePage/NewsPiecePage';
import { NewsContext } from '@/shared/contexts/newsContext';
import { loadLocales } from '@/shared/lib/loadLocales';
import { NewsPieceType } from '@/shared/types';
import { usePathname } from 'next/navigation';

interface propsNews {
  news: NewsPieceType[];
}

const CurrentNewsPiece = ({ news }: propsNews) => {
  return (
    <NewsContext.Provider value={news}>
      <NewsPiecePage />
    </NewsContext.Provider>
  );
};

export default CurrentNewsPiece;

export async function getServerSideProps(ctx) {
  const locale = await loadLocales(['main', 'search'], ctx.locale);
  const news = await getNews();
  console.log(news);

  return {
    props: {
      locale,
      news: news,
    },
  };
}
