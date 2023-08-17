import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './UnderlineLink.module.scss';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  arrowClass?: string;
  textClass?: string;
  contrast?: boolean;
};

type LinkProps = {
  external?: boolean;
  link: true;
  href: string;
};
type ButtonProps = {
  link?: false;
};

type Props = BaseProps & (LinkProps | ButtonProps);

export const UnderlineLink: React.FC<Props> = (props) => {
  return props.link ? (
    <Link
      href={props.href}
      target={props.external && '_blank'}
      rel={props.external && 'noopener noreferrer'}
      className={cn(styles.link, props.contrast && styles.contrast, props.className)}
    >
      <span className={cn(styles.text, props.contrast && styles.text_contrast, props.textClass)}>
        {props.children}
      </span>
      <div
        className={cn(styles.arrow, props.contrast && styles.arrow_contrast, props.arrowClass)}
      />
    </Link>
  ) : (
    <span className={cn(styles.link, props.contrast && styles.contrast, props.className)}>
      <span className={cn(styles.text, props.contrast && styles.text_contrast, props.textClass)}>
        {props.children}
      </span>
      <div
        className={cn(styles.arrow, props.contrast && styles.arrow_contrast, props.arrowClass)}
      />
    </span>
  );
};
