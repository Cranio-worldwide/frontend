import { Button } from '@/components/ui/Button/Button';
import { ModalWindow } from '@/components/ui/ModalWindow/ModalWindow';
import styles from './CityModal.module.scss';

interface IProps {
  city: string;
  isCityOpen: boolean;
  setCityChoiceOpen: (city: boolean) => void;
  onClose: () => void;
}

export const CityModal: React.FC<IProps> = ({ city, isCityOpen, setCityChoiceOpen, onClose }) => {
  const handleClick = () => {
    onClose();
    setCityChoiceOpen(true);
  };

  return (
    <ModalWindow isOpen={isCityOpen} onClose={onClose}>
      <div className={styles.content}>
        <p className={styles.question}>{`Ваш город — ${city}?`}</p>
        <div className={styles.buttons}>
          <Button className={styles.confirm} onClick={onClose}>
            Да
          </Button>
          <button className={styles.text} onClick={handleClick}>
            Изменить
          </button>
        </div>
      </div>
    </ModalWindow>
  );
};
