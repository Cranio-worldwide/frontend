import { Form } from '@/components/Form/Form';
import { TherapistCards } from '@/components/TherapistCards/TherapistCards';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import News from '@/components/News/News';
import styles from './StartPage.module.scss';

/**
 *
 * @returns импорт модулей для стартовой страницы
 */

export const StartPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <TherapistCards />
      <About />
      <News />
      <Footer />
    </>
  );
};
