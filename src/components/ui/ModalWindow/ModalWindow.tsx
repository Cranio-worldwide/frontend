import cn from 'classnames';
import { useEffect, useRef, useContext, useReducer } from 'react';
import { UI } from '@/contexts/UIContext';
import styles from './ModalWindow.module.scss';

interface IProps {
  children?: React.ReactNode;
  windowClassName?: string;
  buttonClassName?: string;
}

export const ModalWindow: React.FC<IProps> = ({
  children,
  windowClassName,
  buttonClassName,
}: IProps) => {
  const { openModal, setOpenModal } = useContext(UI);

  return (
    openModal && (
      <div className={cn(openModal && styles.modal, windowClassName)}>
        <button
          className={cn(styles.close_button, buttonClassName)}
          onClick={() => setOpenModal(false)}
        />
        {children}
      </div>
    )
  );
};
