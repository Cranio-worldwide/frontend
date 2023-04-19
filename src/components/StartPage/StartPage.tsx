import React, { useEffect, useState } from 'react';
import { Form } from 'src/components/Form/Form';
import { TherapistCards } from '../TherapistCards/TherapistCards';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import styles from './StartPage.module.scss';
import News from '../News/News';

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
      <News />
      <Footer />
    </>
  );
};
