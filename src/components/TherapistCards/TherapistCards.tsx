import { therapistsCards } from '../../utils/constants';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import TherapistCard from '../TherapistCard/TherapistCard';
import { SectionTitle } from '../ui/SectionTitle/SectionTitle';
import styles from './TherapistCards.module.scss';

export function TherapistCards() {
  return (
    <section>
      <SectionContainer className={styles.container}>
        <SectionTitle>Look who is close to you now:</SectionTitle>
        <div className={styles.therapists}>
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
        </div>
      </SectionContainer>
    </section>
  );
}
