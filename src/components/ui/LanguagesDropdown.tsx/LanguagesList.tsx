import styles from './LanguagesList.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';
import { useState } from 'react';
import { languages } from 'src/utils/constants';
import { Arrow } from '@/components/ui/arrow/Arrow';
import Icon from '@/assets/lang_ru.svg';
import Image from 'next/image';

interface IProps {
  currentlang?: string;
  onChange?: (lang: string) => void;
}

export const LanguagesList: React.FC<IProps> = ({ currentlang = 'en', onChange }: IProps) => {
  const [lang, setLang] = useState(currentlang);
  const changeLang = (lang: string) => {
    onChange ? onChange(lang) : setLang(lang);
    onClose();
  };
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const CurrentLang = languages.find((item) => item.ISO.toLowerCase() === lang);

  return (
    <div className={styles.container}>
      <div onClick={onOpen} className={styles.active_lang}>
        <span> {CurrentLang.ISO}</span>
        <div className={styles.arrow}>
          <Arrow isOpen={isOpen} />
        </div>
      </div>
      <div className={styles.item_wrapper}>
        <Dropdown isOpen={isOpen} onClose={onClose}>
          {languages.map((lang, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  changeLang(lang.ISO.toLowerCase());
                }}
              >
                <span>{lang.title}</span>
              </div>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
};
