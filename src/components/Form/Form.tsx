import { ChangeEvent, useState } from 'react';
import {
  FormAddress,
  FormDistance,
  FormPrice,
  FormSearchButtonText,
  FormTitle,
  LanguagePrefix,
  Place,
} from '@/shared/types';
import { Button } from '@/components/ui/Button/Button';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './Form.module.scss';
import { FilterDropdown } from '@/components/ui/FilterDropdown/FilterDropdown';
import cn from 'classnames';
import { useTranslation } from '@/shared/lib/useTranslation';

interface IProps {
  place: Place;
}

export const Form: React.FC<IProps> = ({ place }) => {
  const [filterValue, setFilterValue] = useState({
    address: '',
    price: { min: 0, max: 0 },
    distance: 0,
  });
  const changeFilterValue = (key: string, newValue: any) => {
    setFilterValue({ ...filterValue, [key]: newValue });
  };
  const changeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue({ ...filterValue, address: e.target.value });
  };

  const t = useTranslation();
  const titleText = t(['main', 'Find your therapist']);
  // const titleText=''
  // TODO переписать на t, как в примере выше
  const [lang, setLang] = useState<LanguagePrefix>('en');
  const addressText = FormAddress[lang];
  const priceText = FormPrice[lang];
  const distanceText = FormDistance[lang];
  const buttonText = FormSearchButtonText[lang];
  const filterConfig = [
    {
      numeralSystem: 'руб',
      id: 'price',
      form: 'limit',
      description: { min: 'от 2500', max: 'до 45 000' },
      title: priceText,
      filterValue: filterValue.price,
      onChange: changeFilterValue,
    },
    {
      numeralSystem: 'км',
      form: 'range',
      id: 'distance',
      range: { min: 10, max: 1000 },
      rangeValue: filterValue.distance,
      title: distanceText,
      onChange: changeFilterValue,
    },
  ];

  return (
    <section className={cn(styles.section, styles[`section_${place}`])}>
      <SectionContainer>
        <h3 className={cn(styles.title, styles[`title_${place}`])}>{titleText}</h3>
        <form
          className={cn(styles.form, styles[`form_${place}`])}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
          <input
            placeholder={addressText}
            type="text"
            className={styles.input}
            onChange={changeAddress}
            name="address"
            value={filterValue.address}
          />

          {filterConfig.map((filter, index) => {
            const {
              form,
              numeralSystem,
              id,
              description,
              title,
              filterValue,
              onChange,
              range,
              rangeValue,
            } = filter;
            return (
              <FilterDropdown
                key={index}
                numeralSystem={numeralSystem}
                id={id}
                description={description}
                title={title}
                filterValue={filterValue}
                onChange={onChange}
                form={form}
                range={range}
                rangeValue={rangeValue}
              />
            );
          })}
          <Button
            type="submit"
            theme="primary"
            className={cn(styles.button, styles[`button_${place}`])}
            disabled={false}
            onClick={() => {}}
          >
            {buttonText}
          </Button>
        </form>
      </SectionContainer>
    </section>
  );
};
