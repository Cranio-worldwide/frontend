import { FC, ChangeEvent, useState, InputHTMLAttributes, useEffect } from 'react';
import styles from './Limit.module.scss';
import { HtmlProps } from 'next/dist/shared/lib/html-context';

export type InputTheme = 'primary' | 'transparent';

type InputProps = {
  description: {
    max: string;
    min: string;
  };
  className?: string;
  onChange: (key: string, newValue: { max: number; min: number }) => void;
  title?: string;
  filterKey: string;
  filterValue: {
    min?: number | null;
    max?: number | null;
  };
  numeralSystem: string;
};
interface OnChangeBeforeEvent extends ChangeEvent<HTMLInputElement> {
  data: string;
}

export const LimitInputs: FC<InputProps> = ({
  numeralSystem,
  filterKey,
  filterValue,
  onChange,
  description,
  title,
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState({ min: filterValue.min ?? 0, max: filterValue.max ?? 0 });
  const changehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: Number(e.target.value) });
    onChange(filterKey, { ...value, [e.target.name]: Number(e.target.value) });
  };
  useEffect(() => {
    setValue({ min: filterValue.min, max: filterValue.max });
  }, []);

  const onBeforeInputValidator = (e: OnChangeBeforeEvent) => {
    if (!e.data.replace(/[^0-9]/g, '')) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.input_list}>
        <input
          maxLength={8}
          type="text"
          value={filterValue.min ? filterValue.min : ''}
          onBeforeInput={onBeforeInputValidator}
          onChange={(e) => {
            changehandler(e);
          }}
          name="min"
          placeholder={`${description.min} ${numeralSystem}`}
        />
        <span />
        <input
          type="text"
          maxLength={8}
          value={filterValue.max ? filterValue.max : ''}
          onBeforeInput={onBeforeInputValidator}
          onChange={(e) => {
            changehandler(e);
          }}
          name="max"
          placeholder={`${description.max} ${numeralSystem}`}
        />
      </div>
    </div>
  );
};
