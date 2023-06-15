import { useEffect, useState } from 'react';
import cn from 'classnames';
import { therapistsCards } from '../../utils/constants';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { TherapistCard } from '@/components/TherapistCard/TherapistCard';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { Button } from '@/components/ui/Button/Button';
import styles from './TherapistCards.module.scss';
import { Place } from '@/shared/types';

/**
 *
 * секция с карточками терапевтов
 *
 */

interface IProps {
  place: Place;
}

export const TherapistCards: React.FC<IProps> = ({ place }) => {
  const [cardsCount, setCardsCount] = useState(5);
  const [cardsArr, setCardsArr] = useState<typeof therapistsCards>([]);
  const [showMoreButton, setShowMoreButton] = useState(true);

  // сбор карточек терапевтов при загрузке
  useEffect(() => {
    if (therapistsCards) {
      setCardsArr(therapistsCards.slice(0, cardsCount));
      setShowMoreButton(therapistsCards.length >= cardsCount);
    }
  }, [therapistsCards, cardsCount]);

  return (
    <section>
      <SectionContainer className={cn(styles.container, styles[`container_${place}`])}>
        {/* вот здесь доработать после дизайнеров / одинаковые компоненты на стартовой странице и
        странице поиска */}
        <SectionTitle className={cn(place === 'search' && styles.title_search)}>
          Look who is close to you now:
        </SectionTitle>
        <div className={styles.therapists}>
          {cardsArr?.map((therapist) => (
            <TherapistCard
              cardPlace="list"
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
          ))}
        </div>
        {/* вот здесь доработать после дизайнеров / одинаковые компоненты на стартовой странице и
        странице поиска */}
        {showMoreButton && place === 'search' && (
          <Button
            className={styles.button}
            type="button"
            theme="transparent"
            onClick={() => setCardsCount(cardsCount + 5)}
          >
            Показать еще
          </Button>
        )}
      </SectionContainer>
    </section>
  );
};
