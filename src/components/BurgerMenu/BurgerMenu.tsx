import { memo, useState } from 'react';
import { NavItems } from './../ui/NavItems/NavItems';
import styles from './BurgerMenu.module.scss';
import cn from 'classnames';

export const BurgerMenu = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleOpenBurger = () => {
    setAnimation(!animation);

    if (isOpen) {
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.mobile} onClick={handleOpenBurger}>
        <span className={cn(styles.burger, animation && styles.burger_active)}></span>
      </div>
      {isOpen && (
        <NavItems place="burger" className={cn(animation ? styles.opened : styles.closed)} />
      )}
    </div>
  );
});

BurgerMenu.displayName = 'BurgerMenu';
