import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { PageTitle } from '../ui/PageTitle/PageTitle';
import { newsSections } from '@/utils/constants';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsPage.module.scss';
import { UnderlineLink } from '../ui/UnderlineLink/UnderlineLink';

export const NewsPage = () => {
  return (
    <SectionContainer className={styles.container}>
      <PageTitle>Новости</PageTitle>
      <div className={styles.news}>
        {newsSections.map((section) => (
          <div key={section.id} className={styles.section}>
            <SectionTitle className={styles.section_title}>{section.title}</SectionTitle>
            {section.news.map((piece) => (
              <Link
                href={`/news/${piece.title.toLowerCase()}`}
                key={piece.id}
                className={styles.piece}
              >
                <div className={styles.image_container}>
                  <Image src={piece.picture} alt="Изображение к новости" className={styles.image} />
                </div>
                <div className={styles.info}>
                  <span className={styles.subtitle}>{section.title}</span>
                  <span className={styles.date}>{piece.date}</span>
                  <h3 className={styles.title}>{piece.title}</h3>
                  <p className={styles.text}>{piece.text}</p>
                  <UnderlineLink
                    href={`/news/${piece.title.toLowerCase()}`}
                    className={styles.link}
                  >
                    More
                  </UnderlineLink>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
