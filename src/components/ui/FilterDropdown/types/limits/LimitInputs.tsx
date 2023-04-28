import { Children, FC, memo, useState } from 'react';
import styles from './LimitInputs.module.scss';

export type InputTheme = 'primary' | 'transparent';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  description: {
    max: string;
    min: string;
  };
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  title?: string;
  id: string;
  filterValue: {
    min?: number | string | null;
    max?: number | string | null;
  };
}

export const LimitInputs: FC<InputProps> = ({
  id,
  filterValue,
  onChange,
  description,
  title,
}: InputProps) => {
  const changehandler = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.startsWith('0')) {
      e.target.value = e.target.value.slice(1);
    }
    e.target.id = id;
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.input_list}>
        <input
          type="number"
          value={filterValue.min ? filterValue.min : ''}
          onChange={(e) => {
            changehandler(e, id);
          }}
          name="min"
          placeholder={description.min}
        />
        <span />
        <input
          type="number"
          value={filterValue.max ? filterValue.max : ''}
          onChange={(e) => {
            changehandler(e, id);
          }}
          name="max"
          placeholder={description.max}
        />
      </div>
    </div>
  );
};
