import { useEffect, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { CityDropdown } from '@/components/CityDropdown/CityDropdown';
import { AccountButton } from '@/components/AccountButton/AccountButton';
import { NavItems } from '@/components/ui/NavItems/NavItems';
import styles from './Header.module.scss';
import { LanguagesList } from '@/components/ui/LanguagesList/LanguagesList';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export function Header() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCityOpen, setCityOpen] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleOpenBurger() {
    setModalOpen(!isModalOpen);
  }

  return (
    <header className={cn(styles.bg, scrollPosition > 100 && styles.bg_active)}>
      <SectionContainer className={styles.container}>
        <div className={styles.item}>
          {/* TODO добавить картинку когда дизайнеры нарисуют */}
          <Link href="/" className={styles.image}>
            Logo
          </Link>
          <span className={styles.locations}>
            <span className={styles.location}></span>
            <p className={styles.city} onClick={() => setCityOpen(true)}>
              Moscow
            </p>
            <CityDropdown
              isCityOpen={isCityOpen}
              onClose={() => {
                setCityOpen(false);
              }}
            />
          </span>
        </div>

        {/* TODO потом потребуется переписать на ссылки на страницу */}
        <NavItems place="header" />
        <div className={styles.additional}>
          {/* TODO потом потребуется переписать по клику редирект на страницу поиска */}
          <Link href="/search" className={styles.loop}></Link>
          <LanguagesList />
          <AccountButton variant="desktop" />
          <BurgerMenu />
        </div>
      </SectionContainer>
    </header>
  );
}
