import styles from './LanguagesList.module.scss';
import { Dropdown } from '../Dropdown/Dropdown';
import { useRef, useState } from 'react';
import { languages } from 'src/utils/constants';
import { Arrow } from '@/components/ui/Аrrow/Arrow';
import Image from 'next/image';
import { ModalList } from '@/components/ui/ModalList/ModalList';
import { ModalItem } from '@/components/ui/ModalList/ModalItem/ModalItem';

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
  const ref = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const activeLang = languages.find((item) => item.ISO.toLowerCase() === lang);
  return (
    <div className={styles.wrapper} ref={ref}>
      <Dropdown onClose={onClose}>
        <div onClick={onClick} className={styles.active_lang}>
          <Image src={activeLang.photo} alt={activeLang.ISO} className={styles.image} />
          <span> {activeLang.ISO}</span>
          <div className={styles.arrow}>
            <Arrow isOpen={isOpen} />
          </div>
        </div>
        {isOpen && (
          <ModalList>
            {languages.map((lang, index) => {
              return (
                <ModalItem
                  key={index}
                  onClick={() => {
                    changeLang(lang.ISO.toLowerCase());
                  }}
                >
                  <Image src={lang.photo} alt={lang.ISO} className={styles.image} />
                  <span>{lang.title}</span>
                </ModalItem>
              );
            })}
          </ModalList>
        )}
      </Dropdown>
    </div>
  );
};
