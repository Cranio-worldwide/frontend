import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button/Button';
import defaultPhoto from '@/assets/default-photo.png';
import styles from './TherapistCard.module.scss';

type cardPlace = 'list' | 'profile';

interface IProps {
  cardPlace: cardPlace;
  photo?: string;
  name: string;
  position: string;
  location: string;
  distance: string;
  clinic: string;
  address: string;
  price: string;
  phone: string;
}

const TherapistCard: React.FC<IProps> = ({
  cardPlace,
  photo,
  name,
  position,
  location,
  distance,
  clinic,
  address,
  price,
  phone,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { push } = useRouter();

  const redirect = (e) => {
    if (cardPlace === 'list' && e.target.type !== 'button') {
      push('/therapist');
    }
  };

  return (
    <div
      className={cn(styles.card, cardPlace === 'profile' && styles.card_profile)}
      onClick={redirect}
    >
      {photo ? (
        <Image src={photo} alt={name} className={styles.photo} />
      ) : (
        <Image
          src={defaultPhoto}
          alt={name}
          className={cn(styles.photo, cardPlace === 'profile' && styles.photo_profile)}
        />
      )}
      <div className={styles.maininfo}>
        <p className={styles.name}>{name}</p>
        <p className={cn(styles.subtext, styles.position)}>{position}</p>
      </div>
      <div className={styles.place}>
        <div className={styles.with_icon}>
          <div className={styles.location_img} />
          <p className={styles.location}>{location}</p>
        </div>
        <p className={cn(styles.subtext, styles.distance)}>{distance} от вас</p>
      </div>
      <div className={styles.clinic}>
        <div className={styles.with_icon}>
          <div className={styles.clinic_img} />
          <p className={styles.clinic}>{clinic}</p>
        </div>
        <p className={cn(styles.subtext, styles.address)}>{address}</p>
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
function userRef() {
  throw new Error('Function not implemented.');
}
