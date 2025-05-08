import { useEffect, useState } from 'react';

import { cx } from 'features';
import { FullOrder, Filters } from 'components';
import { useLazyGetTransportationsQuery } from 'store';

import { OrdersList } from './Order';

import styles from './styles.module.scss';

export const Orders = () => {
  const [create, setIsCreate] = useState<boolean>(false);
  const [activeOrder, setActiveOrder] = useState<number | null>(null);

  const [getTransportations, { data = [] }] = useLazyGetTransportationsQuery();

  useEffect(() => {
    getTransportations();
  }, []);

  const onSumbit = () => {
    setIsCreate(false);
    setActiveOrder(null);
  };

  const active = data.find((item) => item.id === activeOrder);

  return (
    <div className={styles.container}>
      {activeOrder || create ? (
        <FullOrder transportation={active} onSumbit={onSumbit} setActiveOrder={(v) => setActiveOrder(v)} />
      ) : (
        <div className={cx(styles.content, !!activeOrder && styles.none)}>
          <Filters handleCreate={() => setIsCreate(true)} />
          <OrdersList orders={data || []} activeUserId={activeOrder} setOpenUser={(v) => setActiveOrder(v)} />
        </div>
      )}
    </div>
  );
};
