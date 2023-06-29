import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { ModalWindow } from '@/components/ui/ModalWindow/ModalWindow';
import styles from './CityModal.module.scss';

interface IProps {
  city: string;
  isCityOpen: boolean;
  setCityChoiceOpen: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
}

export const CityModal: React.FC<IProps> = ({ city, isCityOpen, setCityChoiceOpen, onClose }) => {
  return (
    isCityOpen && (
      <ModalWindow
        isOpen={isCityOpen}
        onClose={onClose}
        buttonClassName={styles.close}
        containerRadius={8}
      >
        <div className={styles.content}>
          <p className={styles.question}>{`Ваш город — ${city}?`}</p>
          <div className={styles.buttons}>
            <Button className={styles.confirm} onClick={() => onClose()}>
              Да
            </Button>
            <button
              className={styles.text}
              onClick={() => {
                onClose();
                setCityChoiceOpen(true);
              }}
            >
              Изменить
            </button>
          </div>
        </div>
      </ModalWindow>
    )
  );
};
