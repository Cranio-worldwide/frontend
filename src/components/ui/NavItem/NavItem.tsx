import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './NavItem.module.scss';

interface NavProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const NavItem: React.FC<NavProps> = ({ children, className, href }) => {
  return (
    <Link href={href} className={cn(styles.link, className)}>
      {children}
    </Link>
  );
};
