import React from 'react';
import cn from 'classnames';
import { NavItem } from '@/components/ui/NavItem/NavItem';
import styles from './NavItems.module.scss';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
  contrast?: boolean;
  header?: boolean;
}

export const NavItems: React.FC<NavProps> = ({ children, className, header, contrast }) => {
  return (
    <nav className={cn(styles.navigation, header && styles.navigation_header, className)}>
      <NavItem href="/" className={cn(styles.link_therapists, contrast && styles.contrast)}>
        Our therapists
      </NavItem>
      <NavItem href="/info" className={cn(styles.link_info, contrast && styles.contrast)}>
        Information for therapists
      </NavItem>
      <NavItem href="/contacts" className={cn(styles.link_contacts, contrast && styles.contrast)}>
        Contacts
      </NavItem>
    </nav>
  );
};
