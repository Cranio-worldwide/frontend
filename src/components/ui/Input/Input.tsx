import styles from './Input.module.scss';
import cn from 'classnames';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string;
  placeholder?: string;
  status?: {
    type: 'warning' | 'error' | 'success';
    text: string;
  };
  variant?: 'cut';
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  status,
  variant = '',
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <input
        value={value}
        onChange={onChange}
        className={cn(styles.input, styles[status.type], styles[variant])}
        {...props}
      />
      {status && (
        <div className={styles.status}>
          <span className={cn(styles.icon, styles['icon_' + status.type])}></span>
          <span className={styles.statusText}>{status.text}</span>
        </div>
      )}
    </div>
  );
};
