import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { NavItems } from '@/components/ui/NavItems/NavItems';

import styles from './Footer.module.scss';
import { SocialMediaIcons } from '../SocialMediaIcons/SocialMediaIcons';

export const Footer = () => {
  return (
    <footer className={styles.bg}>
      <SectionContainer className={styles.container}>
        <p className={styles.logo}>Cranio&nbsp;worldwide</p>
        <NavItems className={styles.nav} place="footer" />
        <SocialMediaIcons />
      </SectionContainer>
    </footer>
  );
};
