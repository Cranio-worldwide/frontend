import styles from './Input.module.scss';
import cn from 'classnames';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string;
  placeholder?: string;
  status?: 'warning' | 'error' | 'success';
  statusText?: string;
  variant?: 'cut';
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  status,
  statusText,
  variant = '',
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <input
        value={value}
        onChange={onChange}
        className={cn(styles.input, styles[status], styles[variant])}
        {...props}
      />
      {status && statusText && (
        <div className={styles.status}>
          <span className={cn(styles.icon, styles['icon_' + status])}></span>
          <span className={styles.statusText}>{statusText}</span>
        </div>
      )}
    </div>
  );
};
