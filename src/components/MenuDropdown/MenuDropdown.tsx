import Link from 'next/link';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import cn from 'classnames';
import styles from './MenuDropdown.module.scss';

type item = {
  text: string;
  href?: string;
};

interface IProps {
  className?: string;
  items: Array<item>;
  isOpen: boolean;
  onClose: () => void;
}

export const MenuDropdown: React.FC<IProps> = ({ items, isOpen, onClose, className }) => {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose} className={cn(styles.container, className)}>
      {items.map(({ text, href }) => (
        <Link onClick={onClose} className={styles.item} key={text + href} href={href}>
          {text}
        </Link>
      ))}
    </Dropdown>
  );
};
