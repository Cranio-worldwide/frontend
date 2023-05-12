import { useState } from 'react';
import cn from 'classnames';
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

export function Form({ isSearchForm = false }) {
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
  const filterConfig = [
    {
      numeralSystem: 'руб',
      id: 'price',
      description: { min: 'от 2500', max: 'до 45 000' },
      title: priceText,
      filterValue: filterValue.price,
      onChange: changeFilterValue,
    },
    {
      numeralSystem: 'км',
      id: 'distance',
      description: { min: 'от 1', max: 'до 1000' },
      title: distanceText,
      filterValue: filterValue.distance,
      onChange: changeFilterValue,
    },
  ];
  return (
    <section
      className={cn(styles.section, isSearchForm ? styles.section_search : styles.section_main)}
    >
      <SectionContainer>
        <h3 className={cn(styles.title, isSearchForm ? styles.title_search : styles.title_main)}>
          {titleText}
        </h3>
        <form
          className={cn(styles.form, isSearchForm ? styles.form_search : styles.form_main)}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <input
            placeholder={addressText}
            type="text"
            className={cn(styles.input, isSearchForm ? styles.input_search : styles.input_main)}
            onChange={changeFilterValue}
            name="address"
            value={filterValue.address}
          />

          {filterConfig.map((filter, index) => {
            const { numeralSystem, id, description, title, filterValue, onChange } = filter;
            return (
              <FilterDropdown
                key={index}
                numeralSystem={numeralSystem}
                id={id}
                description={description}
                title={title}
                filterValue={filterValue}
                onChange={onChange}
              />
            );
          })}
          <Button
            type="submit"
            theme="primary"
            className={cn(styles.button, isSearchForm ? styles.button_search : styles.button_main)}
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
