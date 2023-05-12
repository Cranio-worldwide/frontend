import { useEffect, useState } from 'react';
import cn from 'classnames';
import { SectionContainer } from '@/components/SectionContainer/SectionContainer';
import styles from './CustomGMap.module.scss';

export function CustomGMap({
  location,
  isSearchForm = false,
}: {
  location: string;
  isSearchForm?: boolean;
}) {
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
      <SectionContainer
        className={cn(styles.section, isSearchForm ? styles.section_search : styles.section_main)}
      >
        <iframe
          src={locat}
          width="100%"
          height="100%"
          className={cn(styles.iframe, isSearchForm ? styles.iframe_search : styles.iframe_main)}
        ></iframe>
      </SectionContainer>
    </section>
  );
}
