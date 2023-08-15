import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import styles from './NewsSlider.module.scss';
import { Carousel } from '../Carousel/Carousel';
import { useContext } from 'react';
import Link from 'next/link';
import { NewsContext } from '@/shared/contexts/newsContext';
import { UnderlineLink } from '../ui/UnderlineLink/UnderlineLink';

export const NewsSlider = () => {
  const news = useContext(NewsContext);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <Link href={'/news'}>
          <SectionTitle>News</SectionTitle>
        </Link>
        <UnderlineLink href={'/news'} className={styles.underline} arrowClass={styles.arrow}>
          Смотреть все
        </UnderlineLink>
      </div>
      <Carousel arrows>
        {news.map((piece) => (
          <NewsPiece key={piece.id} piece={piece} />
        ))}
      </Carousel>
    </div>
  );
};
