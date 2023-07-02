import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import styles from './NewsSlider.module.scss';
import { Carousel } from '../Carousel/Carousel';
import { useContext, useMemo } from 'react';
import Link from 'next/link';
import { NewsContext } from '@/shared/contexts/newsContext';

export const NewsSlider = () => {
  const news = useContext(NewsContext);
  const newsPieces = useMemo(() => (news.length >= 4 ? news.slice(-4) : news), [news]);

  return (
    <SectionContainer className={styles.container}>
      <Link href={'/news'}>
        <SectionTitle>News</SectionTitle>
      </Link>
      <Carousel arrows>
        {newsPieces.map((piece) => {
          <NewsPiece
            key={piece.id}
            photo={''}
            title={piece.description}
            path={piece.description}
          />;
        })}
      </Carousel>
    </SectionContainer>
  );
};
