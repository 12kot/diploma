import { useState } from 'react';

import { cx } from 'features';
import { FullOrder, Filters } from 'components';

import { OrdersList } from './Order';

import styles from './styles.module.scss';

export const Orders = () => {
  const [activeOrder, setActiveOrder] = useState<number | null>(1);

  return (
    <div className={styles.container}>
      <div className={cx(styles.content, !!activeOrder && styles.none)}>
        <Filters handleCreate={() => {}} />
        <OrdersList orders={[]} activeUserId={activeOrder} setOpenUser={(v) => setActiveOrder(v)} />
      </div>
      {activeOrder && <FullOrder setActiveOrder={(v) => setActiveOrder(v)} />}
    </div>
  );
};

