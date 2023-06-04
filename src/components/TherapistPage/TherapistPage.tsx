import { Form } from '@/components/Form/Form';
import { TherapistCards } from '@/components/TherapistCards/TherapistCards';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { CustomGMap } from '@/components/CustomGMap/CustomGMap';
import { WithPlace } from '../WithPlace/WithPlace';
import TherapistCard from '../TherapistCard/TherapistCard';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { TherapistMainInfo } from '../TherapistMainInfo/TherapistMainInfo';
import { TherapistAbout } from '../TherapistAbout/TherapistAbout';
import AlsoCloseTherapists from '../AlsoCloseTherapists/AlsoCloseTherapists';

/**
 *
 * импорт модулей для страницы поиска
 */

export const TherapistPage = () => {
  const FormWithPlace = WithPlace(Form);
  const MapWithPlace = WithPlace(CustomGMap);
  const TherapistCardsWithPlace = WithPlace(TherapistCards);

  return (
    <>
      <Header />
      <TherapistMainInfo />
      <TherapistAbout />
      <AlsoCloseTherapists />
      <Footer />
    </>
  );
};
