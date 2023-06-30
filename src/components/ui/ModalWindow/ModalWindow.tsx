import { useEffect } from 'react';
import { useLockScroll } from '@/shared/lib/useLockScroll';
import cn from 'classnames';
import { Dropdown } from '../Dropdown/Dropdown';
import styles from './ModalWindow.module.scss';

type ModalSize = 'small' | 'medium' | 'large';

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
}

export const ModalWindow: React.FC<IProps> = ({ isOpen, onClose, children, size = 'small' }) => {
  const { lockScroll, unlockScroll } = useLockScroll();

  useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen]);

  return (
    isOpen && (
      <Dropdown onClose={onClose}>
        <div className={styles.background}>
          <div className={cn(styles.container, styles[`container_${size}`])}>
            <button className={cn(styles.close, styles[`close_${size}`])} onClick={onClose} />
            {children}
          </div>
        </div>
      </Dropdown>
    )
  );
};
