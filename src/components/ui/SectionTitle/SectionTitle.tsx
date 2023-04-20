import React from 'react';
import cn from 'classnames';
import styles from './SectionTitle.module.scss';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<TitleProps> = ({ children, className }) => {
  return <h2 className={cn(styles.title, className)}>{children}</h2>;
};
