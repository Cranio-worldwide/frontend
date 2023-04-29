import cn from 'classnames';
import styles from './Dropdown.module.scss';
import { useEffect, useRef } from 'react';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  // onClose: () => void;
}

export const Dropdown: React.FC<IProps> = ({ isOpen, children, className }: IProps) => {
  return isOpen && <div className={cn(isOpen && styles.container, className)}>{children}</div>;
};
