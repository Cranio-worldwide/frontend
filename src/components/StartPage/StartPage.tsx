import { Form } from '@/components/Form/Form';
import { TherapistCards } from '@/components/TherapistCards/TherapistCards';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { NewsSlider } from '@/components/NewsSlider/NewsSlider';
import { CustomGMap } from '../CustomGMap/CustomGMap';
import { WithPlace } from '../WithPlace/WithPlace';

/**
 *
 * импорт модулей для стартовой страницы
 */

export const StartPage = () => {
  const FormWithPlace = WithPlace(Form);
  const MapWithPlace = WithPlace(CustomGMap);
  const TherapistCardsWithPlace = WithPlace(TherapistCards);
  return (
    <>
      <Hero />
      <FormWithPlace />
      <MapWithPlace location={'London'} />
      <TherapistCardsWithPlace />
      <About />
      <NewsSlider />
    </>
  );
};
