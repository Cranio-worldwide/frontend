import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes, useRef, useState } from 'react';
import styles from './FilterDropdown.module.scss';
import { LimitInputs } from './Limit/Limit';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import { Arrow } from '@/components/ui/Аrrow/Arrow';
import Range from './Range/Range';

export type InputTheme = 'primary' | 'transparent';

type InputProps = {
  numeralSystem: string;
  onChange: (key: string, newValue: any) => void;
  title: string;
  id: string;

  filterValue?: any;
  description?: {
    max: string;
    min: string;
  };
  form?: 'limit' | 'range' | string | undefined;
  rangeValue?: number;
  range?: any;
};

const CustomFilterDropdown: FC<InputProps> = ({
  title,
  id,
  numeralSystem,
  onChange,
  filterValue = {
    min: 0,
    max: 0,
  },
  rangeValue = 0,
  description = undefined,
  form = 'limit',
  range = { min: 10, max: 1000 },
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const titleText = rangeValue
    ? `${rangeValue} ${numeralSystem}`
    : filterValue.min && filterValue.max
    ? `${filterValue.min} - ${filterValue.max}  ${numeralSystem}`
    : title;
  return (
    <Dropdown onClose={handleClose}>
      <div className={styles.container} id={id} ref={ref}>
        <div className={styles.title} onClick={handleClick}>
          <span>{titleText}</span>
          <Arrow isOpen={isOpen} />
        </div>
        {isOpen && form === 'limit' && (
          <LimitInputs
            numeralSystem={numeralSystem}
            filterKey={id}
            filterValue={filterValue}
            onChange={onChange}
            title={title}
            description={description}
          />
        )}
        {isOpen && form === 'range' && (
          <Range
            filterKey={id}
            numeralSystem={numeralSystem}
            value={rangeValue}
            onChange={onChange}
            range={range}
          ></Range>
        )}
      </div>
    </Dropdown>
  );
};
export const FilterDropdown = CustomFilterDropdown;
