import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { NavItem } from '../ui/NavItem/NavItem';
import styles from './Footer.module.scss';
import { NavItems } from '../ui/NavItems/NavItems';

export const Footer = () => {
  return (
    <footer className={styles.bg}>
      <SectionContainer className={styles.container}>
        <p className={styles.logo}>Cranio&nbsp;worldwide</p>
        <NavItems className={styles.nav} contrast />
        <div className={styles.sm_block}>
          <a href="#" className={styles.sm_vk} />
          <a href="#" className={styles.sm_inst} />
          <a href="#" className={styles.sm_tg} />
        </div>
      </SectionContainer>
    </footer>
  );
};
