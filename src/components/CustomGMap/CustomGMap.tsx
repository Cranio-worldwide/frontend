import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './CustomGMap.module.scss';
import { Place } from '@/shared/types';

interface IProps {
  location: string;
  place: Place;
}

export const CustomGMap: FC<IProps> = ({ location, place }) => {
  const [locat, setLocat] = useState(
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1smoskow!6i11!3m1!1sen!5m1!1sen'
  );

  useEffect(() => {
    setLocat(
      `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s${location}!6i11!3m1!1sen!5m1!1sen`
    );
  }, [location]);

  return (
    <section>
      <SectionContainer className={cn(styles.section, styles[`section_${place}`])}>
        <iframe
          src={locat}
          width="100%"
          height="100%"
          className={cn(styles.iframe, styles[`iframe_${place}`])}
        ></iframe>
      </SectionContainer>
    </section>
  );
};
