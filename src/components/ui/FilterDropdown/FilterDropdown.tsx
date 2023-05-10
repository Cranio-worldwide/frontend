import React, { FC, useRef, useState } from 'react';
import styles from './FilterDropdown.module.scss';
import { LimitInputs } from './types/limits/LimitInputs';
import { Dropdown } from '@/components/ui/Dropdown/Dropdown';
import { Arrow } from '@/components/ui/Аrrow/Arrow';

export type InputTheme = 'primary' | 'transparent';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  description: {
    max: string;
    min: string;
  };
  numeralSystem: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  title: string;
  type?: 'limit' | undefined;
  id: string;
  filterValue: {
    min?: number | null;
    max?: number | null;
  };
}

const CustomFilterDropdown: FC<InputProps> = ({
  form = 'limit',
  title,
  id,
  numeralSystem,
  filterValue,
  onChange,
  description,
}: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dropdown onClose={handleClose}>
      <div className={styles.container} id={id} ref={ref}>
        <div className={styles.title} onClick={handleClick}>
          <span>
            {filterValue.min && filterValue.max
              ? `${filterValue.min} ${numeralSystem} - ${filterValue.max}  ${numeralSystem}`
              : title}
          </span>
          {!filterValue.min && !filterValue.max ? <Arrow isOpen={isOpen} /> : ''}
        </div>
        {isOpen && form === 'limit' && (
          <LimitInputs
            numeralSystem={numeralSystem}
            id={id}
            filterValue={filterValue}
            onChange={onChange}
            title={title}
            description={description}
          />
        )}
      </div>
    </Dropdown>
  );
};
export const FilterDropdown = CustomFilterDropdown;
