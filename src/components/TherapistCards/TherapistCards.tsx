import therapistsCards from '../../utils/constants';
import Button from '../Button/Button';
import TherapistCard from '../TherapistCard/TherapistCard';
import styles from './TherapistCards.module.scss';

const TherapistCards = () => {
  return (
    <section className={styles.therapists}>
      {therapistsCards.map((therapist) => (
        <TherapistCard
          key={therapist.id}
          photo={therapist.photo}
          name={therapist.name}
          position={therapist.position}
          location={therapist.location}
          distance={therapist.distance}
          clinic={therapist.clinic}
          adress={therapist.adress}
          price={therapist.price}
          phone={therapist.phone}
        />
      ))}
    </section>
  );
};

export default TherapistCards;
