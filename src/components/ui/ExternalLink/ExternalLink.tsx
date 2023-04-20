import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './ExternalLink.module.scss';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  arrowClass?: string;
  textClass?: string;
  contrast?: boolean;
}

export const ExternalLink: React.FC<LinkProps> = ({
  children,
  className,
  arrowClass,
  textClass,
  href,
  contrast,
}) => {
  return (
    <Link href={href} className={cn(styles.link, contrast && styles.contrast, className)}>
      <span className={cn(styles.text, contrast && styles.text_contrast, textClass)}>
        {children}
      </span>
      <div className={cn(styles.arrow, contrast && styles.arrow_contrast, arrowClass)} />
    </Link>
  );
};
