import { ChangeEvent } from 'react';
import styles from './Range.module.scss';

type RangeProps = {
  value: number;
  onChange: (key: string, newValue: any) => void;
  range: {
    max: number;
    min: number;
  };
  numeralSystem: string;
  filterKey: string;
};

export default function Range({ value, range, onChange, numeralSystem, filterKey }: RangeProps) {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(filterKey, Number(e.target.value));
  };
  return (
    <div className={styles.container}>
      {range.min} {numeralSystem}
      <input
        min={range.min}
        max={range.max}
        type="range"
        step={10}
        value={value}
        onChange={changeHandler}
      />
      {range.max} {numeralSystem}
    </div>
  );
}
