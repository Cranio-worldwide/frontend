import { getNews } from '@/api/news/getNews';
import { newsArray } from '@/utils/constants';
import { StartPage } from '@/components/StartPage';
import { NewsContext } from '@/shared/contexts/newsContext';
import { loadLocales } from '@/shared/lib/loadLocales';
import { getAbout } from '@/api/about/getAbout';
import { AboutType } from '@/shared/types';
import { AboutContext } from '@/shared/contexts/aboutContext';

interface Props {
  id: number;
  date: string;
  picture: string;
  title: string;
  text: string;
  is_published: boolean;
}

interface ServerProps {
  about: AboutType;
  news: Props[];
}

export default function Home({ about, news }: ServerProps) {
  return (
    <>
      <NewsContext.Provider value={news}>
        <AboutContext.Provider value={about}>
          <StartPage />
        </AboutContext.Provider>
      </NewsContext.Provider>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const locale = await loadLocales(['main', 'search'], ctx.locale);
  const news = await getNews();
  const about = await getAbout().catch(console.warn);

  return {
    props: {
      locale,
      news: newsArray,
      about,
    },
  };
}
