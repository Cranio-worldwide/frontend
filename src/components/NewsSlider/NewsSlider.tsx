import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import styles from './NewsSlider.module.scss';
import { Carousel } from '../Carousel/Carousel';
import { useContext } from 'react';
import Link from 'next/link';
import { NewsContext } from '@/shared/contexts/newsContext';

export const NewsSlider = () => {
  const news = useContext(NewsContext);

  return (
    <SectionContainer className={styles.container}>
      <Link href={'/news'}>
        <SectionTitle>News</SectionTitle>
      </Link>
      <Carousel arrows={true}>
        {news.map((piece) => (
          <NewsPiece key={piece.id} photo={piece.picture} title={piece.title} path={piece.title} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};
