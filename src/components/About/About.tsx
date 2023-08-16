import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { UnderlineLink } from '@/components/ui/UnderlineLink/UnderlineLink';
import { Carousel } from '../Carousel/Carousel';
import { AboutContext } from '@/shared/contexts/aboutContext';
import { useContext, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './About.module.scss';

export const About = () => {
  const about = useContext(AboutContext);
  console.log(about);

  const [navText, setNavText] = useState();
  const [navImg, setNavImg] = useState();

  // База для масштабирования: текст и картинка яляются слайдерами, сменяются синхронно, если в них больше одного элемента

  return (
    about && (
      <section className={styles.bg}>
        <Carousel
          asNavFor={navImg}
          refs={(slider1) => setNavText(slider1)}
          className={styles.textSlide}
        >
          <Link href={about.link} className={styles.link} target="_blank" rel="noopener noreferrer">
            <SectionContainer className={styles.container}>
              <div className={styles.info}>
                <SectionTitle className={styles.title}>About Craniosacral therapy</SectionTitle>
                <p className={styles.text}>{about.text}</p>
              </div>

              <UnderlineLink contrast link={false} className={styles.underline}>
                Link to worldwide association
              </UnderlineLink>
            </SectionContainer>
          </Link>
        </Carousel>
        <Carousel
          dots
          asNavFor={navText}
          refs={(slider2) => setNavImg(slider2)}
          className={styles.slider}
        >
          <Link href={about.link} className={styles.link} target="_blank" rel="noopener noreferrer">
            <Image
              className={styles.image}
              src={`http://cranio-worldwide.tk${about.image}`}
              width="580"
              height="580"
              alt="Изображение"
            />
          </Link>
        </Carousel>
      </section>
    )
  );
};
