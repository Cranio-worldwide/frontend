import { HtmlHTMLAttributes, useState } from 'react';
import {
  FormAddress,
  FormDistance,
  FormPrice,
  FormSearchButtonText,
  FormTitle,
  LanguagePrefix,
} from '@/shared/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './Form.module.scss';
import { FilterDropdown } from '@/components/ui/FilterDropdown/FilterDropdown';

export function Form() {
  const [filterValue, setFilterValue] = useState({
    address: '',
    price: { min: 0, max: 0 },
    distance: { min: 0, max: 0 },
  });
  const changeFilterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'address') {
      setFilterValue({
        ...filterValue,
        address: e.target.value,
      });
    } else {
      setFilterValue({
        ...filterValue,
        [e.target.id]: { ...filterValue[e.target.id], [e.target.name]: Number(e.target.value) },
      });
    }
  };
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
          <input
            placeholder={addressText}
            type="text"
            className={styles.input}
            onChange={changeFilterValue}
            name="address"
            value={filterValue.address}
          />
          {/*  TODO дополнить ввод полей цена и геолокация после уточнения у дизайнеров */}
          <FilterDropdown
            id="price"
            description={{ min: 'от 2500', max: 'до 45 000' }}
            title={priceText}
            filterValue={filterValue.price}
            onChange={changeFilterValue}
          />
          <FilterDropdown
            id="distance"
            description={{ min: 'от 1 км', max: 'до 1000 км' }}
            title={distanceText}
            filterValue={filterValue.distance}
            onChange={changeFilterValue}
          />
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
