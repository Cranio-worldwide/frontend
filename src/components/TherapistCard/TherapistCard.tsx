import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from '../Button/Button';
import styles from './TherapistCard.module.scss';

interface IProps {
  photo: string;
  name: string;
  position: string;
  location: string;
  distance: string;
  clinic: string;
  adress: string;
  price: string;
  phone: string;
}

const TherapistCard: React.FC<IProps> = ({
  photo,
  name,
  position,
  location,
  distance,
  clinic,
  adress,
  price,
  phone,
}: IProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className={styles.card}>
      <Image src={photo} alt={name} className={styles.photo} />
      <div className={styles.maininfo}>
        <p className={styles.name}>{name}</p>
        <p className={cn(styles.subtext, styles.position)}>{position}</p>
      </div>
      <div className={styles.place}>
        <div className={styles.with_icon}>
          <div className={styles.location_img} />
          <p>{location}</p>
        </div>
        <p className={cn(styles.subtext, styles.distance)}>{distance} от вас</p>
      </div>
      <div className={styles.clinic}>
        <div className={styles.with_icon}>
          <div className={styles.clinic_img} />
          <p className={styles.clinic}>{clinic}</p>
        </div>
        <p className={cn(styles.subtext, styles.adress)}>{adress}</p>
      </div>
      <div className={styles.details}>
        <span className={styles.primary}>Первичный прием</span>
        <span className={styles.subtext}>Стоимость приема</span>
        <span className={styles.price}>{price} руб.</span>
      </div>
      {clicked ? (
        <a className={cn(styles.subtext, styles.phone)} href={`tel:${phone}`}>
          {phone}
        </a>
      ) : (
        <Button
          type="button"
          className={cn(styles.subtext, styles.button)}
          disabled={false}
          onClick={() => setClicked(true)}
        >
          Показать номер
        </Button>
      )}
    </div>
  );
};

export default TherapistCard;
