import React, { useEffect, useState } from 'react';
import styles from './Form.module.scss';
import {
  FormAddress,
  FormDistance,
  FormHeading,
  FormPrice,
  FormSearchButtonText,
  FormTitle,
  LanguagePrefix,
} from '@/shared/types';
import { Button } from '../Button/Button';

export function Form() {
  // TODO потом вынести выбор языка в пропсы
  const [lang, setLang] = useState<LanguagePrefix>('en');
  const headingText = FormHeading[lang];
  const titleText = FormTitle[lang];
  const addressText = FormAddress[lang];
  const priceText = FormPrice[lang];
  const distanceText = FormDistance[lang];
  const buttonText = FormSearchButtonText[lang];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Cranio Worldwide</h1>
        <h2 className={styles.subheading}>{headingText}</h2>
      </div>
      <h3 className={styles.title}>{titleText}</h3>
      <form className={styles.form} onSubmit={(e) => console.log(e)}>
        <input placeholder={addressText} type="text" className={styles.input} />

        {/*  TODO дополнить ввод полей цена и геолокация после уточнения у дизайнеров */}
        <select className={styles.select}>
          <option>{priceText}</option>
        </select>
        <select className={styles.select}>
          <option>{distanceText}</option>
        </select>
        <Button
          type="submit"
          theme="primary"
          className={styles.button}
          disabled={false}
          onClick={() => {}}
        >
          {buttonText}
        </Button>
      </form>
    </section>
  );
}
