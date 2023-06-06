import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import defaultPhoto from '@/assets/default-photo.png';
import styles from './AlsoCloseTherapist.module.scss';

interface IProps {
  photo?: string;
  name: string;
  experience?: string;
  location: string;
  distance: string;
  price: string;
}

export const AlsoCloseTherapist: React.FC<IProps> = ({
  photo,
  name,
  experience,
  location,
  distance,
  price,
}) => {
  const { push } = useRouter();
  const redirect = () => {
    push('/therapist');
  };

  return (
    <div className={cn(styles.card)} onClick={redirect}>
      <div className={styles.details}>
        {photo ? (
          <Image src={photo} alt={name} className={styles.photo} />
        ) : (
          <Image src={defaultPhoto} alt={name} className={cn(styles.photo)} />
        )}
        <p className={cn(styles.subtext, styles.distance)}>{distance} от вас</p>
      </div>
      <div className={styles.maininfo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.experience}>{experience}</p>
        <div className={styles.with_icon}>
          <div className={styles.location_img} />
          <p className={styles.location}>{location}</p>
        </div>
        <span className={styles.price}>{price} руб.</span>
      </div>
    </div>
  );
};
