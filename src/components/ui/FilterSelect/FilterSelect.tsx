import { Children, FC } from 'react';
import cn from 'classnames';
// import styles from './FilterSelect.module.scss';
import { Input } from '../Input/Input';

export type InputTheme = 'primary' | 'transparent';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder?: string;
  variant?: 'cut';
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  title?: string;
  filterValue: {
    min?: number;
    max?: number;
  };
}

export const FilterSelect: FC<InputProps> = ({ title, filterValue, onChange }: InputProps) => {
  return (
    <div>
      <div>{title};sadsa</div>
      <div>
        <Input name="min" placeholder={`from ${filterValue.min}`} value="" onChange={() => {}} />
        <span>-</span>
        <Input name="max" placeholder={`from ${filterValue.max}`} value="" onChange={() => {}} />
      </div>
    </div>
  );
};
