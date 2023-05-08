import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { NavItems } from '@/components/ui/NavItems/NavItems';

import cn from 'classnames';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.bg}>
      <SectionContainer className={styles.container}>
        <p className={styles.logo}>Cranio&nbsp;worldwide</p>
        <NavItems className={styles.nav} place="footer" />
        <div className={styles.sm_block}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(styles.sm, styles.sm_vk)}
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(styles.sm, styles.sm_inst)}
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(styles.sm, styles.sm_tg)}
          />
        </div>
      </SectionContainer>
    </footer>
  );
};
