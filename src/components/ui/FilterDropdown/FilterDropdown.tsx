import React, { Children, FC, memo, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './FilterDropdown.module.scss';
import { LimitInputs } from './types/limits/LimitInputs';
import { Arrow } from '../arrow/Arrow';

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClose]);

  return (
    <div className={styles.container} id={id} ref={ref}>
      <div className={styles.title} onClick={handleClick}>
        <span>
          {filterValue.min && filterValue.max
            ? `${filterValue.min} ${numeralSystem} - ${filterValue.max}  ${numeralSystem}`
            : title}
        </span>
        {!filterValue.min && !filterValue.min ? <Arrow isOpen={isOpen} /> : ''}
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
  );
};
export const FilterDropdown = CustomFilterDropdown;
