import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@/components/ui/Button/Button';
import { cities } from '@/utils/constants';
import styles from './SimpleSearchForm.module.scss';
import cn from 'classnames';

interface IProps {
  onClose: () => void;
  setCity: Dispatch<SetStateAction<string>>;
}

export const SimpleSearchForm: React.FC<IProps> = ({ onClose, setCity }) => {
  const [value, setValue] = useState('');
  const [verifiedValue, setVerifiedValue] = useState('');
  const [hintOpen, setHintOpen] = useState<boolean>(false);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    setHintOpen(true);

    if (verifiedValue !== '') {
      setVerifiedValue('');
    }
  };
  const filtered = cities.filter((city) => city.city.toLowerCase().includes(value.toLowerCase()));
  return (
    <form
      className={cn(styles.form)}
      onSubmit={(e) => {
        e.preventDefault();
        if (verifiedValue !== '') {
          setCity(verifiedValue);
          onClose();
        }
      }}
    >
      <div className={styles.input_group}>
        <input
          type="text"
          className={styles.input}
          onChange={changeValue}
          name="address"
          value={value || ''}
          onBlur={() => value === '' && setHintOpen(false)}
        />
        {hintOpen && filtered.length > 0 && (
          <div className={styles.input_hints}>
            {filtered.slice(0, 3).map((hint) => (
              <span
                className={styles.input_hint}
                key={hint.id}
                onClick={() => {
                  setValue(`${hint.city}, ${hint.country}`);
                  setVerifiedValue(hint.city);
                  setHintOpen(false);
                }}
              >
                {`${hint.city}, ${hint.country}`}
              </span>
            ))}
          </div>
        )}
        {hintOpen && filtered.length === 0 && (
          <div className={styles.input_hints}>
            <span>Ничего не найдено!</span>
          </div>
        )}
      </div>

      <Button
        type="submit"
        theme="primary"
        className={cn(styles.button)}
        disabled={!verifiedValue}
        onClick={() => {}}
      >
        Сохранить
      </Button>
    </form>
  );
};
