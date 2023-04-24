import styles from './About.module.scss';
import aboutImg from '../../images/about-img.png';
import Image from 'next/image';

export const About = () => {
  const aboutText = `
  The basis of CranioSacral Therapy is the idea that there is fluid circulating around the spinal cord (cerebrospinal fluid = CSF) and that a trained practitioner can manipulate the flow of that fluid. John Upledger has perfected this art of healing since the 1970s. That is, someone holds your head and uses pressure on the skull bones to help pump CSF around the spinal cord and nerve endings. Due to the small amount of research, CranioSacral Therapy has created a lot of hype over the years. 
  `;

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h3 className={styles.heading}>About Craniosacral therapy</h3>
        <p>{aboutText}</p>
        <a href="#" className={styles.link}>
          Link to worldwide association
        </a>
      </div>
      <Image className={styles.image} src={aboutImg} alt="" />
    </div>
  );
};
