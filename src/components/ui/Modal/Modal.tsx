import cn from 'classnames';
import { useEffect, useRef, useContext } from 'react';
import { UI } from '@/contexts/UIContext';
import styles from './Modal.module.scss';
import { ModalWindow } from '../ModalWindow/ModalWindow';

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<IProps> = ({ children, className }: IProps) => {
  const { openModal, setOpenModal } = useContext(UI);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    if (openModal) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  return (
    openModal && (
      <div
        className={cn(openModal && styles.background, className)}
        onClick={closeModal}
        ref={modalRef}
      >
        <ModalWindow>{children}</ModalWindow>
      </div>
    )
  );
};
