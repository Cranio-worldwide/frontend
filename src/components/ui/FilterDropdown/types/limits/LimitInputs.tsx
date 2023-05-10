import { FC, ChangeEvent } from 'react';
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
  numeralSystem: string;
}
interface OnChangeBeforeEvent extends ChangeEvent<HTMLInputElement> {
  data: string;
}

export const LimitInputs: FC<InputProps> = ({
  numeralSystem,
  id,
  filterValue,
  onChange,
  description,
  title,
}: InputProps) => {
  const changehandler = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    e.target.id = id;
    onChange(e);
  };

  const onBeforeInputvalidator = (e: OnChangeBeforeEvent) => {
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
          onBeforeInput={onBeforeInputvalidator}
          onChange={(e) => {
            changehandler(e, id);
          }}
          name="min"
          placeholder={`${description.min} ${numeralSystem}`}
        />
        <span />
        <input
          type="text"
          maxLength={8}
          value={filterValue.max ? filterValue.max : ''}
          onBeforeInput={onBeforeInputvalidator}
          onChange={(e) => {
            changehandler(e, id);
          }}
          name="max"
          placeholder={`${description.max} ${numeralSystem}`}
        />
      </div>
    </div>
  );
};
