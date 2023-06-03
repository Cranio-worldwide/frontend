import { useState, useRef } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { MenuDropdown } from '@/components/MenuDropdown/MenuDropdown';
import styles from './AccountButton.module.scss';
import { Dropdown } from '../ui/Dropdown/Dropdown';

const menuItems = [
  { text: 'Профиль', href: '/' },
  { text: 'Условия сотрудничества', href: '/' },
  { text: 'Оплата', href: '/' },
  { text: 'Выйти', href: '/' },
];

export const AccountButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  return (
    <div className={styles.container} ref={ref}>
      <Dropdown onClose={handleClose}>
        <Button className={styles.button} type="button" theme="transparent" onClick={handleClick}>
          Личный кабинет
        </Button>
        {isOpen && <MenuDropdown items={menuItems} onClose={handleClose} />}
      </Dropdown>
    </div>
  );
};
