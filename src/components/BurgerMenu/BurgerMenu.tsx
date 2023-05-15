import { memo, useState } from 'react';
import { NavItems } from './../ui/NavItems/NavItems';
import styles from './BurgerMenu.module.scss';
import cn from 'classnames';

export const BurgerMenu = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobile} onClick={handleOpenBurger}>
        <span className={cn(styles.burger, isOpen && styles.burger_active)}></span>
      </div>
      <NavItems place="burger" className={cn(isOpen ? styles.opened : styles.closed)} />
    </div>
  );
});

BurgerMenu.displayName = 'BurgerMenu';
