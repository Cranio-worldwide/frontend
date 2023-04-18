import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Button } from '@/components/ui/Button/Button';
import { CityDropdown } from '@/components/CityDropdown/CityDropdown';

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
      <div className={styles.container}>
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
        <div className={styles.navigations}>
          <a className={styles.navigation}>Our therapists</a>
          <a className={cn(styles.navigation_active, styles.navigation)}>
            Information for therapists
          </a>
          <a className={styles.navigations}>Contacts</a>
        </div>

        <div className={styles.additional}>
          {/* TODO потом потребуется переписать по клику редирект на страницу поиска */}
          <span className={styles.loop}></span>
          <select name="language" id="language" className={styles.languages}>
            <option value="ru" className={styles.language}>
              {/* уточнить про финальную версию в среду */}
              {/* <img className="header__flag header__flag_ru" alt="Ru" />  */}
              Ru
            </option>
            <option value="en" className={styles.language}>
              En
            </option>
            <option value="es" className={styles.language}>
              Es
            </option>
            <option value="ger" className={styles.language}>
              Ger
            </option>
          </select>
          <Button className={styles.button} type="button" theme="transparent" onClick={() => {}}>
            Личный кабинет
          </Button>
          <button className={styles.mobile} onClick={handleOpenBurger}>
            <span className={cn(styles.burger, isModalOpen && styles.burger_active)}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
