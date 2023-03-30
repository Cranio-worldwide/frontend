import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';

export function Header() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
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
    <header className={`${styles.bg} ${scrollPosition > 100 && styles.bg_active}`}>
      <div className={styles.container}>
        <div className={styles.item}>
          <a href="/" target="_blank" rel="noreferrer" className={styles.image}>
            Logo
          </a>
          <a className={styles.locations}>
            <span className={styles.location}></span>
            <p className={styles.city}>Moscow</p>
          </a>
        </div>

        {/* потом потребуется переписать на ссылки на страницу */}
        <div className={styles.navigations}>
          <a className={styles.navigation}>Our therapists</a>
          <a className={`${styles.navigation_active} ${styles.navigation}`}>
            Information for therapists
          </a>
          <a className={styles.navigations}>Contacts</a>
        </div>

        <div className={styles.additional}>
          {/* уточнить про активное состояние */}
          <span className={styles.loop}></span>
          <select name="language" id="language" className={styles.languages}>
            <option value="ru" className={styles.language}>
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
          <button className={styles.button}>Личный кабинет</button>
          <button className={styles.mobile} onClick={handleOpenBurger}>
            <span className={`${styles.burger} ${isModalOpen && styles.burger_active}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
