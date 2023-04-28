import { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

export type ButtonTheme = 'primary' | 'transparent';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  children?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  theme = 'primary',
  children,
  type,
  disabled,
  onClick,
}) => (
  <button
    className={cn(styles.button, styles[`button_${theme}`], className)}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
