import { useState } from 'react';
import { CustomGMap } from '../CustomGMap/CustomGMap';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import styles from './TherapistAbout.module.scss';
import cn from 'classnames';

export const TherapistAbout = () => {
  const [section, setSection] = useState('about');

  return (
    <section>
      <SectionContainer className={styles.container}>
        <div>
          <ul className={styles.titles}>
            <li>
              <h2
                className={cn(styles.title, section === 'about' && styles.title_active)}
                onClick={() => setSection('about')}
              >
                About
              </h2>
            </li>
            <li>
              <h2
                className={cn(styles.title, section === 'specialization' && styles.title_active)}
                onClick={() => setSection('specialization')}
              >
                Specialization
              </h2>
            </li>
            <li>
              <h2
                className={cn(styles.title, section === 'treatment' && styles.title_active)}
                onClick={() => setSection('treatment')}
              >
                Treatment
              </h2>
            </li>
          </ul>
          <div className={styles.content}>
            {section === 'about' ? (
              <p className={styles.text}>
                Ryspaeva Aliya Shayakhmetovna - chiropractor, 12 years of experience. Carries out
                diagnostics and treatment of headaches, dizziness, neuralgia, neurosis,
                osteochondrosis, sclerosis, epilepsy, intervertebral hernia, atherosclerosis,
                vegetovascular dystonia and other diseases of the nervous system.
              </p>
            ) : section === 'specialization' ? (
              <div className={styles.specializations}>
                <span className={styles.specialization}>Болезнь Шляттера</span>
                <span className={styles.specialization}>Деформации костно-мышечной системы</span>
              </div>
            ) : section === 'treatment' ? (
              <p>
                Классическая мануальная терапия; Мягкие мануальные техники; Постизометрическая
                релаксация мышц; Тракционные техники; Вакуумный массаж; Гуа-ша массаж;
                Паравертебральные блокады; Гирудотерапия; Снятие кардиграмм; Терапия аппаратом
                «Плазон».
              </p>
            ) : null}
          </div>
          <a>Share profile</a>
        </div>
        <CustomGMap location="moscow" place="therapist" />
      </SectionContainer>
    </section>
  );
};
