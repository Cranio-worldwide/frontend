import { usePathname } from 'next/navigation';
import { NavItem } from '../ui/NavItem/NavItem';
import styles from './Navigator.module.scss';

interface Props {
  section: string;
  title: string;
}

export const Navigator = ({ section, title }: Props) => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavItem href="/" className={styles.link}>
            Home
          </NavItem>
        </li>
        <li className={styles.item}>
          <NavItem href="/news" className={styles.link}>
            {section}
          </NavItem>
        </li>
        <li className={styles.item}>
          <NavItem href={pathname} className={styles.link}>
            {title}
          </NavItem>
        </li>
      </ul>
    </nav>
  );
};
