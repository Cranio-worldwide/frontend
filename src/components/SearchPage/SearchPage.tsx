import { Form } from '@/components/Form/Form';
import { TherapistCards } from '@/components/TherapistCards/TherapistCards';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { CityDropdown } from '../CityDropdown/CityDropdown';
import { CustomGMap } from '@/components/CustomGMap/CustomGMap';

/**
 *
 * @returns импорт модулей для страницы поиска
 */

export const SearchPage = () => {
  return (
    <>
      <Header />
      <Form isSearchForm={true} />
      <CustomGMap location={'london'} isSearchForm={true} />
      <TherapistCards isSearchForm={true} />
      <Footer />
    </>
  );
};
