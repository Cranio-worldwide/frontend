import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import { SectionTitle } from '@/components/ui/SectionTitle/SectionTitle';
import { UnderlineLink } from '@/components/ui/UnderlineLink/UnderlineLink';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aboutImg from '@/assets/about-img.png';
import styles from './About.module.scss';
import { Carousel } from '../Carousel/Carousel';

const settings = {
  infinite: true,
  lazyLoad: true,
  dots: true,
  dotsClass: `slick-dots ${styles.dots}`,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
};
export const About = () => {
  const aboutText = `
  The basis of CranioSacral Therapy is the idea that there is fluid circulating around the spinal cord (cerebrospinal fluid = CSF) and that a trained practitioner can manipulate the flow of that fluid. John Upledger has perfected this art of healing since the 1970s. That is, someone holds your head and uses pressure on the skull bones to help pump CSF around the spinal cord and nerve endings. Due to the small amount of research, CranioSacral Therapy has created a lot of hype over the years. 
  `;

  return (
    <section>
      <Link href="#" className={styles.bg} target="_blank" rel="noopener noreferrer">
        <SectionContainer className={styles.container}>
          <div className={styles.info}>
            <SectionTitle className={styles.title}>About Craniosacral therapy</SectionTitle>

            <p className={styles.text}>{aboutText}</p>
          </div>

          <UnderlineLink contrast external href="#">
            Link to worldwide association
          </UnderlineLink>
        </SectionContainer>
        <Carousel className={styles.slider}>
          <Image className={styles.image} src={aboutImg} alt="Изображение" />
          <Image className={styles.image} src={aboutImg} alt="Изображение" />
          <Image className={styles.image} src={aboutImg} alt="Изображение" />
        </Carousel>
      </Link>
    </section>
  );
};
