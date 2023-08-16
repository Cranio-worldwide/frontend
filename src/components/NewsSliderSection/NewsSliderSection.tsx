import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './NewsSliderSection.module.scss';

import { NewsSlider } from '@/components/NewsSlider/NewsSlider';

export const NewsSliderSection = () => {
  return (
    <SectionContainer className={styles.container}>
      <NewsSlider />
    </SectionContainer>
  );
};
