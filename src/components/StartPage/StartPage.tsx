import { Form } from '@/components/Form/Form';
import { TherapistCards } from '@/components/TherapistCards/TherapistCards';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { CustomGMap } from '../CustomGMap/CustomGMap';
import { WithPlace } from '../WithPlace/WithPlace';
import { NewsSliderSection } from '@/components/NewsSliderSection/NewsSliderSection';

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
      <NewsSliderSection />
    </>
  );
};
