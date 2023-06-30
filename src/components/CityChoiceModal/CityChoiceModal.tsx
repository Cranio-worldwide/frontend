import { cities } from '@/utils/constants';
import { ModalWindow } from '@/components/ui/ModalWindow/ModalWindow';
import styles from './CityChoiceModal.module.scss';
import { SimpleSearchForm } from '@/components/ui/SimpleSearchForm/SimpleSearchForm';
import { useEffect, useState } from 'react';

interface IProps {
  isCityChoiceOpen: boolean;
  onClose: () => void;
  setCity: (city: string) => void;
}

export const CityChoiceModal: React.FC<IProps> = ({ isCityChoiceOpen, onClose, setCity }) => {
  return (
    <ModalWindow isOpen={isCityChoiceOpen} onClose={onClose} size="large">
      <div className={styles.content}>
        <SimpleSearchForm onClose={onClose} setCity={setCity} />
        <p className={styles.text}>Введите город в поле поиска или выберите из списка</p>
        <ul className={styles.cities}>
          {cities.slice(0, 40).map((city) => (
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
  );
};
