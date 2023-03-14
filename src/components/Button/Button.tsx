import styles from './Button.module.scss';

export function Button({ style, type, buttonText, disabled, onClick }) {
  return (
    <button
      className={`${styles.button} ${style}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
