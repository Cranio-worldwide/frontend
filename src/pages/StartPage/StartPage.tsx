import React, { useEffect, useState } from 'react';
import { Form } from 'src/components/Form/Form';

import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
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
      <Footer />
    </>
  );
};
