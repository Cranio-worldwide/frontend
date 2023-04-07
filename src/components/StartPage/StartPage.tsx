import React, { useEffect, useState } from 'react';
import { Form } from 'src/components/Form/Form';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { InframeMap } from '../InframeMap/InframeMap';
import styles from './StartPage.module.scss';

/**
 *
 * @returns импорт модулей для стартовой страницы
 */

export const StartPage = () => {
  return (
    <>
      <Header />
      <span className={`${styles.big_section} ${styles.overlay}`}></span>
      <Form />
      <InframeMap />
      <Footer />
    </>
  );
};
