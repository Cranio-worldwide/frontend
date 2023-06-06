import { useState } from 'react';
import { CustomGMap } from '../CustomGMap/CustomGMap';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import styles from './TherapistAbout.module.scss';
import ShareIcon from '@/assets/share.svg';
import cn from 'classnames';

export const TherapistAbout = () => {
  const [section, setSection] = useState('about');

  const specializationList = [
    'Болезнь Шляттера',
    'Деформации костно-мышечной системы',
    'Дегенеративно-дистрофическое заболевание диска',
    'Разрыв связок голеностопного сустава и стопы',
    'Растяжение связок голеностопа',
    'Растяжение связок коленного сустава',
    'Растяжение связок предплечья',
    'Растяжение связок стопы',
  ];

  const treatmentList = [
    'Классическая мануальная терапия',
    'Мягкие мануальные техники',
    'Постизометрическая релаксация мышц',
    'Тракционные техники',
    'Вакуумный массаж',
    'Гуа-ша массаж',
    'Паравертебральные блокады',
    'Гирудотерапия',
    'Снятие кардиграмм',
    'Терапия аппаратом «Плазон»',
  ];

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
              <ul className={styles.specializations}>
                {specializationList.map((item) => (
                  <li key={Math.random()} className={styles.specialization}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : section === 'treatment' ? (
              <ul className={styles.treatments}>
                {treatmentList.map((item) => (
                  <li key={Math.random()} className={styles.treatment}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <a className={styles.link}>
            <ShareIcon />
            Share profile
          </a>
        </div>
        <CustomGMap location="moscow" place="therapist" />
      </SectionContainer>
    </section>
  );
};
