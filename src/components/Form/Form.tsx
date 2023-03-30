import React, { useEffect, useState } from 'react';

import styles from './Form.module.scss';

export function Form() {
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    setLang('en');
  }, []);

  let headingText = '';
  switch (lang) {
    case 'ru':
      headingText = 'Помогаем терапевтам и&nbsp;пациентам найти&nbsp;друг друга';
      break;
    case 'en':
      headingText = `Helping therapists and patients find each other`;
      break;
    default:
      console.log('');
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Cranio Worldwide</h1>
        <h2 className={styles.subheading}>{headingText}</h2>
      </div>
      <h3 className={styles.title}>Find your therapist</h3>
      <form className={styles.form} onSubmit={(e) => console.log(e)}>
        <input placeholder="Enter Adress" type="text" className={styles.input} />

        {/*  дополнить ввод полей цена и геолокация после уточнения у дизайнеров */}
        <select className={styles.select}>
          <option>Price</option>
        </select>
        <select className={styles.select}>
          <option>Distance</option>
        </select>
        <button className={styles.button}>Search</button>
      </form>
    </section>
  );
}
