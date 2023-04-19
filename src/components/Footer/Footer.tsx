import { SectionContainer } from '../SectionContainer/SectionContainer';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.bg}>
      <SectionContainer className={styles.container}>
        <p className={styles.logo}>Cranio&nbsp;worldwide</p>
        <nav className={styles.nav}>
          <a href="#" className={styles.nav_item}>
            Our&nbsp;therapists
          </a>
          <a href="#" className={styles.nav_item}>
            Information&nbsp;for&nbsp;therapists
          </a>
          <a href="#" className={styles.nav_item}>
            Contacts
          </a>
        </nav>
        <div className={styles.sm_block}>
          <a href="#" className={styles.sm_vk} />
          <a href="#" className={styles.sm_inst} />
          <a href="#" className={styles.sm_tg} />
        </div>
      </SectionContainer>
    </footer>
  );
};
