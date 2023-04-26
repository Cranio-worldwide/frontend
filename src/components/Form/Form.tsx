import { useState } from 'react';
import {
  FormAddress,
  FormDistance,
  FormPrice,
  FormSearchButtonText,
  FormTitle,
  LanguagePrefix,
} from '@/shared/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import styles from './Form.module.scss';
import { Dropdown } from '../ui/Dropdown/Dropdown';
import { FilterSelect } from '../ui/FilterSelect/FilterSelect';

export function Form() {
  // TODO потом вынести выбор языка в пропсы
  const [lang, setLang] = useState<LanguagePrefix>('en');
  const titleText = FormTitle[lang];
  const addressText = FormAddress[lang];
  const priceText = FormPrice[lang];
  const distanceText = FormDistance[lang];
  const buttonText = FormSearchButtonText[lang];

  return (
    <section className={styles.section}>
      <SectionContainer className={styles.container}>
        <h3 className={styles.title}>{titleText}</h3>
        <form className={styles.form} onSubmit={(e) => console.log(e)}>
          <input placeholder={addressText} type="text" className={styles.input} />
          {/*  TODO дополнить ввод полей цена и геолокация после уточнения у дизайнеров */}
          <select className={styles.select}>
            <option></option>
          </select>
          <select className={styles.select}>
            <option></option>
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
      </SectionContainer>
    </section>
  );
}
