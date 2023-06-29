import { Button } from '@/components/ui/Button/Button';
import { cities } from '@/utils/constants';
import { ModalWindow } from '@/components/ui/ModalWindow/ModalWindow';
import styles from './CityChoiceModal.module.scss';
import { SimpleSearchForm } from '@/components/ui/SimpleSearchForm/SimpleSearchForm';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface IProps {
  isCityChoiceOpen: boolean;
  onClose: () => void;
  setCity: Dispatch<SetStateAction<string>>;
}

export const CityChoiceModal: React.FC<IProps> = ({ isCityChoiceOpen, onClose, setCity }) => {
  const [citiesNumber, setCitiesNumber] = useState<number>();

  useEffect(() => {
    function resize() {
      if (window.innerWidth > 1100) {
        setCitiesNumber(40);
      } else if (window.innerWidth <= 1100) {
        setCitiesNumber(30);
      }
      if (window.innerWidth <= 850) {
        setCitiesNumber(20);
      }
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    isCityChoiceOpen && (
      <ModalWindow isOpen={isCityChoiceOpen} onClose={onClose}>
        <div className={styles.content}>
          <SimpleSearchForm onClose={onClose} setCity={setCity} />
          <p className={styles.text}>Введите город в поле поиска или выберите из списка</p>
          <ul className={styles.cities}>
            {cities.slice(0, citiesNumber).map((city) => (
              <li key={city.id} className={styles.city_item}>
                <span
                  className={styles.city}
                  onClick={() => {
                    setCity(city.city);
                    onClose();
                  }}
                >
                  {city.city}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ModalWindow>
    )
  );
};
