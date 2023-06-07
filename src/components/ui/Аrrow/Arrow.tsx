import cn from 'classnames';
import styles from './Arrow.module.scss';
import { memo } from 'react';

interface IProps {
  isOpen: boolean;
}

const IArrow: React.FC<IProps> = ({ isOpen }: IProps) => {
  return <i className={cn(styles.arrow, isOpen ? styles.up : styles.down)} />;
};
export const Arrow = memo(IArrow);
