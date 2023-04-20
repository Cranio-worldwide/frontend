import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.overlay}>
      <div className={styles.whitening} />
      <SectionContainer>
        <div className={styles.heading}>
          <h1 className={styles.title}>Cranio Worldwide</h1>
          <p className={styles.subtitle}>Helping therapists and patients find each other</p>
        </div>
      </SectionContainer>
    </section>
  );
};
