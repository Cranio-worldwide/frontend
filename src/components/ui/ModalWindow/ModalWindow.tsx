import React, { useCallback, useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from './ModalWindow.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';

interface IProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  buttonClassName?: string;
  containerRadius?: number;
}

export const ModalWindow: React.FC<IProps> = ({
  isOpen,
  onClose,
  children,
  containerRadius = 16,
  buttonClassName,
}: IProps) => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, []);
  useEffect(() => {
    isOpen ? lockScroll() : unlockScroll();
  }, [isOpen]);

  return (
    <Dropdown onClose={onClose}>
      <div className={styles.background}>
        <div className={styles.container} style={{ borderRadius: containerRadius }}>
          <button className={cn(styles.close, buttonClassName)} onClick={onClose} />
          {children}
        </div>
      </div>
    </Dropdown>
  );
};
