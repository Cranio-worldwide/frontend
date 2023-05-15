import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { NavItems } from '@/components/ui/NavItems/NavItems';
import VKIcon from '../../assets/vk.svg';
import InstIcon from '../../assets/inst.svg';
import TGIcon from '../../assets/tg.svg';

import cn from 'classnames';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.bg}>
      <SectionContainer className={styles.container}>
        <p className={styles.logo}>Cranio&nbsp;worldwide</p>
        <NavItems className={styles.nav} place="footer" />
        <div className={styles.sm_block}>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <VKIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <InstIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <TGIcon />
          </a>
        </div>
      </SectionContainer>
    </footer>
  );
};
