import React from 'react';
import cn from 'classnames';
import styles from './PageTitle.module.scss';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTitle: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={cn(styles.title, className)}>{children}</h1>;
};
