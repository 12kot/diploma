import { useState } from 'react';

import { ActiveOrder } from 'components';

import styles from './styles.module.scss';

export const ProfileOrders = () => {
  const [activeOrder, setActiveOrder] = useState<number | null>();

  if (activeOrder)
    return (
      <div className={styles.active}>
        <ActiveOrder setActiveOrder={setActiveOrder} />
      </div>
    );

  return <div className={styles.container}></div>;
};
