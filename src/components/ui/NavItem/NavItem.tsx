import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './NavItem.module.scss';

interface NavProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const NavItem: React.FC<NavProps> = ({ children, className, href }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Link
      href={href}
      className={cn(styles.link, currentRoute === href && styles.link_active, className)}
    >
      {children}
    </Link>
  );
};
