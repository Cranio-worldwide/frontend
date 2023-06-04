import { therapistsCards } from 'src/utils/constants';
import TherapistCard from '../TherapistCard/TherapistCard';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import styles from './TherapistMainInfo.module.scss';

export const TherapistMainInfo = () => {
  const therapist = therapistsCards[0];

  return (
    <section>
      <SectionContainer className={styles.container}>
        <TherapistCard
          cardPlace="profile"
          key={therapist.id}
          photo={therapist.photo}
          name={therapist.name}
          position={therapist.position}
          location={therapist.location}
          distance={therapist.distance}
          clinic={therapist.clinic}
          address={therapist.address}
          price={therapist.price}
          phone={therapist.phone}
        />
      </SectionContainer>
    </section>
  );
};
