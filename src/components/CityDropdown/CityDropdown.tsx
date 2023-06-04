import { Button } from '@/components/ui/Button/Button';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import styles from './CityDropdown.module.scss';
import { useCallback, useEffect } from 'react';

interface IProps {
  isCityOpen: boolean;
  onClose: () => void;
}

export const CityDropdown: React.FC<IProps> = ({ isCityOpen, onClose }) => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
  }, []);
  useEffect(() => {
    isCityOpen ? lockScroll() : unlockScroll();
  }, [isCityOpen]);

  return (
    <Dropdown onClose={onClose}>
      {isCityOpen && (
        <div className={styles.container}>
          <div className={styles.content}>
            <button className={styles.close} onClick={onClose} />
            <p className={styles.question}>Ваш город — Москва?</p>
            <div className={styles.buttons}>
              <Button className={styles.confirm} onClick={() => {}}>
                Да
              </Button>
              <button className={styles.text} onClick={() => {}}>
                Изменить
              </button>
            </div>
          </div>
        </div>
      )}
    </Dropdown>
  );
};
