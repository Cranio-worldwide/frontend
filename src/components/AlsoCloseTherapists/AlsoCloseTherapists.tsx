import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { therapistsCards } from '@/utils/constants';
import { Carousel } from '../Carousel/Carousel';
import { AlsoCloseTherapist } from '../AlsoCloseTherapist/AlsoCloseTherapist';
import styles from './AlsoCloseTherapists.module.scss';

export const AlsoCloseTherapists = () => {
  return (
    <SectionContainer className={styles.container}>
      <h2 className={styles.title}>Also close to you</h2>
      <Carousel arrows>
        {therapistsCards.map((therapist) => (
          <AlsoCloseTherapist
            key={therapist.id}
            name={therapist.name}
            experience={therapist.experience}
            location={therapist.location}
            distance={therapist.distance}
            price={therapist.price}
          />
        ))}
      </Carousel>
    </SectionContainer>
  );
};
