import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import styles from './InframeMap.module.scss';

export function InframeMap() {
  return (
    <section className={styles.section}>
      <YMaps>
        <Map className={styles.container} defaultState={{ center: [45, 45], zoom: 10 }} />
      </YMaps>
    </section>
  );
}
