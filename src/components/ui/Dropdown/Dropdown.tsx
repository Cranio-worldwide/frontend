import cn from 'classnames';
import styles from './Dropdown.module.scss';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Dropdown: React.FC<IProps> = ({ isOpen, onClose, children, className }: IProps) => {
  return isOpen ? (
    <>
      <div className={cn(isOpen && styles.container, className)}>{children}</div>
      <div className={styles.background} onClick={onClose} />
    </>
  ) : null;
};
