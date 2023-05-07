import { useEffect, useState, useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { UI } from '@/contexts/UIContext';
import { AccountButton } from '@/components/AccountButton/AccountButton';
import { NavItems } from '@/components/ui/NavItems/NavItems';
import styles from './Header.module.scss';
import { LanguagesList } from '@/components/ui/LanguagesDropdown.tsx/LanguagesList';

export function Header() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const { openModal, setOpenModal } = useContext(UI);

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
          <span className={styles.locations} onClick={() => setOpenModal(!openModal)}>
            <span className={styles.location}></span>
            <p className={styles.city}>Moscow</p>
          </span>
        </div>

        {/* TODO потом потребуется переписать на ссылки на страницу */}
        <NavItems place="header" />
        <div className={styles.additional}>
          {/* TODO потом потребуется переписать по клику редирект на страницу поиска */}
          <span className={styles.loop}></span> <LanguagesList />
          <AccountButton />
          <button className={styles.mobile} onClick={handleOpenBurger}>
            <span className={cn(styles.burger, isModalOpen && styles.burger_active)}></span>
          </button>
        </div>
      </SectionContainer>
    </header>
  );
}
