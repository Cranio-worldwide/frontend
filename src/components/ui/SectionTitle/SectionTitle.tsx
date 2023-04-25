import React from 'react';
import cn from 'classnames';
import styles from './SectionTitle.module.scss';

interface InputProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<InputProps> = ({ children, className }) => {
  return <h2 className={cn(styles.title, className)}>{children}</h2>;
};
