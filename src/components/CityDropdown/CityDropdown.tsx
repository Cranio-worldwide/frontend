import { Button } from '@/components/ui/Button/Button';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import styles from './CityDropdown.module.scss';

interface IProps {
  isCityOpen: boolean;
  onClose: () => void;
}

export const CityDropdown: React.FC<IProps> = ({ isCityOpen, onClose }) => {
  return (
    <Dropdown onClose={onClose} isOpen={isCityOpen} className={styles.container}>
      <button className={styles.close} onClick={onClose} />
      <p className={styles.question}>Ваш город — Москва?</p>
      <div className={styles.buttons}>
        <Button className={styles.confirm} onClick={() => {}}>
          Да
        </Button>
        <button className={styles.text} onClick={() => {}}>
          Изменить
        </button>
      </div>
    </Dropdown>
  );
};
