import { useState, useRef } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { MenuDropdown } from '@/components/MenuDropdown/MenuDropdown';
import styles from './AccountButton.module.scss';
import cn from 'classnames';
import { Dropdown } from '../ui/Dropdown/Dropdown';

const menuItems = [
  { text: 'Профиль', href: '/' },
  { text: 'Условия сотрудничества', href: '/' },
  { text: 'Оплата', href: '/' },
  { text: 'Выйти', href: '/' },
];

interface IProps {
  variant?: 'desktop' | 'burger';
  className?: string;
}

export const AccountButton: React.FC<IProps> = ({ className, variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleClick = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  return (
    <div className={cn(styles.container, styles[variant])} ref={ref}>
      <Dropdown onClose={handleClose}>
        <Button className={styles.button} type="button" theme="transparent" onClick={handleClick}>
          Личный кабинет
        </Button>
        {isOpen && <MenuDropdown items={menuItems} onClose={handleClose} />}
      </Dropdown>
    </div>
  );
};
