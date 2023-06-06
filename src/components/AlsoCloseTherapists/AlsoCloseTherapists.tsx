import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { therapistsCards } from 'src/utils/constants';
import styles from './AlsoCloseTherapists.module.scss';
import { Carousel } from '../Carousel/Carousel';
import { AlsoCloseTherapist } from '../AlsoCloseTherapist/AlsoCloseTherapist';

export default function AlsoCloseTherapists() {
  return (
    <SectionContainer className={styles.container}>
      <h2 className={styles.title}>Also close to you</h2>
      <Carousel arrows>
        {therapistsCards.map((therapist) => (
          <AlsoCloseTherapist
            key={therapist.id}
            photo={therapist.photo}
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
}
