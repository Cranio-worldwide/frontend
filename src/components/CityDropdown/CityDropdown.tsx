import { Button } from '@/components/ui/Button/Button';
import styles from './CityDropdown.module.scss';

export const CityDropdown: React.FC = () => {
  return (
    <>
      <p className={styles.question}>Ваш город — Москва?</p>
      <div className={styles.buttons}>
        <Button className={styles.confirm} onClick={() => {}}>
          Да
        </Button>
        <button className={styles.text} onClick={() => {}}>
          Изменить
        </button>
      </div>
    </>
  );
};
