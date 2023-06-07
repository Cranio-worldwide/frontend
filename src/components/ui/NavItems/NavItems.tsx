import React from 'react';
import cn from 'classnames';
import { NavItem } from '@/components/ui/NavItem/NavItem';
import styles from './NavItems.module.scss';
import { AccountButton } from '@/components/AccountButton/AccountButton';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
  place: 'header' | 'footer' | 'burger';
}

export const NavItems: React.FC<NavProps> = ({ children, className, place }) => {
  return (
    <nav className={cn(styles.navigation, styles[place], className)}>
      <NavItem href="/search" className={cn(styles.link, styles[place + '_link'])}>
        Our therapists
      </NavItem>
      <NavItem href="/info" className={cn(styles.link, styles[place + '_link'])}>
        Information for therapists
      </NavItem>
      <NavItem href="/contacts" className={cn(styles.link, styles[place + '_link'])}>
        Contacts
      </NavItem>
      {place === 'burger' && <AccountButton variant="burger" className={styles.accBtn} />}
    </nav>
  );
};
