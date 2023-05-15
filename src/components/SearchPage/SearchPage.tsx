import { Form } from '@/components/Form/Form';
import { TherapistCards } from '@/components/TherapistCards/TherapistCards';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { CustomGMap } from '@/components/CustomGMap/CustomGMap';
import { WithPlace } from '../WithPlace/WithPlace';

/**
 *
 * импорт модулей для страницы поиска
 */

export const SearchPage = () => {
  const FormWithPlace = WithPlace(Form);
  const MapWithPlace = WithPlace(CustomGMap);
  const TherapistCardsWithPlace = WithPlace(TherapistCards);
  return (
    <>
      <Header />
      <FormWithPlace />
      <MapWithPlace location={'london'} />
      <TherapistCardsWithPlace />
      <Footer />
    </>
  );
};
