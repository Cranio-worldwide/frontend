import { NewsPiece } from '@/components/NewsPiece/NewsPiece';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { news } from 'src/utils/constants';

import styles from './News.module.scss';
import { Carousel } from '../Carousel/Carousel';

export default function News() {
  return (
    <SectionContainer className={styles.container}>
      <SectionTitle>News</SectionTitle>
      <Carousel arrows>
        {news.map((piece) => (
          <NewsPiece key={piece.id} photo={piece.photo.src} title={piece.title} />
        ))}
      </Carousel>
    </SectionContainer>
  );
}
