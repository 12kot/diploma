import { useState } from 'react';

import { ActiveOrder } from 'components/Order';

import styles from "./styles.module.scss";


export const Orders = () => {
  const [activeOrder, setActiveOrder] = useState<number | null>();

  if (activeOrder) return <div className={styles.order__container}><ActiveOrder setActiveOrder={setActiveOrder} /></div>

  return (
    <div className={styles.container}>
    </div>
  );
};