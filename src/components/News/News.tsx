import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
// import { news } from 'src/utils/constants';
import { NewsContext } from '@/pages/index';
import styles from './News.module.scss';
import { Carousel } from '../Carousel/Carousel';
import { useContext } from 'react';
import Link from 'next/link';

export default function News() {
  const news = useContext(NewsContext);

  return (
    <SectionContainer className={styles.container}>
      <Link href={'/news'}>
        <SectionTitle>News</SectionTitle>
      </Link>
      <Carousel arrows>
        {news.length >= 4
          ? news.slice(-4).map((piece) => (
              <NewsPiece
                key={piece.id}
                /*photo={добавить рабочую ссылку на }*/
                title={piece.description}
                id={piece.description}
              />
            ))
          : news.map((piece) => (
              <NewsPiece
                key={piece.id}
                /*photo={добавить рабочую ссылку на }*/
                title={piece.description}
                id={piece.description}
              />
            ))}
      </Carousel>
    </SectionContainer>
  );
}
