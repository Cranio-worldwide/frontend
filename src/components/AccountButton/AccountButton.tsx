import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { MenuDropdown } from '@/components/MenuDropdown/MenuDropdown';
import styles from './AccountButton.module.scss';

export const AccountButton = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setIsOpenMenu]);

  const menuItems = [
    { text: 'Профиль', href: '/' },
    { text: 'Условия сотрудничества', href: '/' },
    { text: 'Оплата', href: '/' },
    { text: 'Выйти', href: '/' },
  ];

  return (
    <div className={styles.container} ref={ref}>
      <Button
        className={styles.button}
        type="button"
        theme="transparent"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        Личный кабинет
      </Button>

      {isOpenMenu && (
        <MenuDropdown
          className={styles.dropdown}
          items={menuItems}
          isOpen={isOpenMenu}
          onClose={() => setIsOpenMenu(false)}
        />
      )}
    </div>
  );
};
