import styles from './Input.module.scss';
import cn from 'classnames';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string;
  status?: 'warning' | 'error' | 'success';
  className?: string;
  placeholder?: string;
  statusText?: string;
}

export const Input = ({ value, status, statusText, className, ...props }: InputProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <input value={value} className={cn(styles.input, styles[status])} {...props} />
      {status && (
        <div className={styles.status}>
          <span className={cn(styles.icon, styles['icon_' + status])}></span>
          <span>{statusText}</span>
        </div>
      )}
    </div>
  );
};
