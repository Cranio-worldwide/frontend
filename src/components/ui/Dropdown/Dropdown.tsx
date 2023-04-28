import cn from 'classnames';
import styles from './Dropdown.module.scss';
import { useEffect, useRef } from 'react';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Dropdown: React.FC<IProps> = ({ isOpen, onClose, children, className }: IProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClose]);

  return (
    isOpen && (
      <>
        <div className={cn(isOpen && styles.container, className)} ref={ref}>
          {children}
        </div>
        {/* <div className={styles.background} onClick={onClose} /> */}
      </>
    )
  );
};
