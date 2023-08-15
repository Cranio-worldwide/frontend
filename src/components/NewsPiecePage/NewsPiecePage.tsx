import { NewsSlider } from '../NewsSlider/NewsSlider';
import { Navigator } from '../Navigator/Navigator';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import Image from 'next/image';
import styles from './NewsPiecePage.module.scss';
import { PageTitle } from '../ui/PageTitle/PageTitle';
import { SocialMediaIcons } from '../SocialMediaIcons/SocialMediaIcons';
import { getNewsById } from '@/api/news/getNewsById';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NewsPieceType } from '@/shared/types';

export const NewsPiecePage = () => {
  const pathname = usePathname();
  const id = pathname.replace('/news/', '').replace('/', '');
  const [piece, setPiece] = useState<NewsPieceType>();

  async function getServerSideProps() {
    const newsById = await getNewsById(id);
    return newsById;
  }

  useEffect(() => {
    getServerSideProps().then((res: NewsPieceType) => {
      setPiece(res);
    });
  }, []);

  return (
    piece && (
      <SectionContainer className={styles.container}>
        <Navigator section="News" title={piece.title} />
        <Image
          src={piece.picture}
          width="1174"
          height="622"
          alt="Изображение к новости"
          className={styles.image}
        />
        <PageTitle>{piece.title}</PageTitle>
        <span className={styles.date}>{piece.date}</span>
        <p className={styles.text}>{piece.text}</p>
        <SocialMediaIcons className={styles.icons} linkClass={styles.link} />
        <NewsSlider />
      </SectionContainer>
    )
  );
};
