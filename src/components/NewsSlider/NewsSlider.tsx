import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
// import { news } from 'src/utils/constants';
import { NewsContext } from '@/pages/index';
import styles from './NewsSlider.module.scss';
import { Carousel } from '../Carousel/Carousel';
import { useContext } from 'react';
import Link from 'next/link';

export default function NewsSlider() {
  const news = useContext(NewsContext);

  const newsPieces = news.map((piece) => (
    <NewsPiece key={piece.id} photo={''} title={piece.description} id={piece.description} />
  ));

  return (
    <SectionContainer className={styles.container}>
      <Link href={'/news'}>
        <SectionTitle>News</SectionTitle>
      </Link>
      <Carousel arrows>{news.length >= 4 ? newsPieces.slice(-4) : newsPieces}</Carousel>
    </SectionContainer>
  );
}
