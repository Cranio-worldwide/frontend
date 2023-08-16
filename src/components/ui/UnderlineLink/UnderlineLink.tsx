import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './UnderlineLink.module.scss';

interface LinkProps {
  children: React.ReactNode;
  link?: boolean;
  href?: string;
  className?: string;
  arrowClass?: string;
  textClass?: string;
  contrast?: boolean;
  external?: boolean;
}

export const UnderlineLink: React.FC<LinkProps> = ({
  children,
  link = true,
  className,
  arrowClass,
  textClass,
  href,
  contrast,
  external,
}) => {
  return link ? (
    <Link
      href={href}
      target={external && '_blank'}
      rel={external && 'noopener noreferrer'}
      className={cn(styles.link, contrast && styles.contrast, className)}
    >
      <span className={cn(styles.text, contrast && styles.text_contrast, textClass)}>
        {children}
      </span>
      <div className={cn(styles.arrow, contrast && styles.arrow_contrast, arrowClass)} />
    </Link>
  ) : (
    <span className={cn(styles.link, contrast && styles.contrast, className)}>
      <span className={cn(styles.text, contrast && styles.text_contrast, textClass)}>
        {children}
      </span>
      <div className={cn(styles.arrow, contrast && styles.arrow_contrast, arrowClass)} />
    </span>
  );
};
