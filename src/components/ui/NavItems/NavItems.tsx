import React from 'react';
import cn from 'classnames';
import { NavItem } from '@/components/ui/NavItem/NavItem';
import styles from './NavItems.module.scss';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
  place: 'header' | 'footer';
}

export const NavItems: React.FC<NavProps> = ({ children, className, place }) => {
  return (
    <nav
      className={cn(styles.navigation, place === 'header' && styles.navigation_header, className)}
    >
      <NavItem
        href="/"
        className={cn(styles.link_therapists, place === 'footer' && styles.contrast)}
      >
        Our therapists
      </NavItem>
      <NavItem href="/info" className={cn(styles.link_info, place === 'footer' && styles.contrast)}>
        Information for therapists
      </NavItem>
      <NavItem
        href="/contacts"
        className={cn(styles.link_contacts, place === 'footer' && styles.contrast)}
      >
        Contacts
      </NavItem>
    </nav>
  );
};
