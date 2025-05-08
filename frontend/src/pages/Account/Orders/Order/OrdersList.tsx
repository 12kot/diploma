import { useMemo } from 'react';

import { Button } from 'components';
import { cx, ITransportation } from 'features';

import styles from './styles.module.scss';

interface Props {
  orders: ITransportation[];

  activeUserId?: number | null;
  setOpenUser: (id: number) => void;
}

export const OrdersList = ({ orders, activeUserId, setOpenUser }: Props) => {
  const memoOrders = useMemo(() => {
    return [...orders].map((order) => (
      <Order key={order.id} activeUserId={activeUserId} setOpenUser={setOpenUser} {...order} />
    ));
  }, [orders, activeUserId, setOpenUser]);

  return <section className={styles.container}>{memoOrders}</section>;
};

interface UserProps extends ITransportation {
  activeUserId?: number | null;
  setOpenUser: (id: number) => void;
}

const Order = ({ activeUserId, setOpenUser, ...order }: UserProps) => {
  return (
    <div className={cx(styles.list, activeUserId === order.id && styles.active)}>
      <Button buttonType={'default'} className={styles.link} onClick={() => setOpenUser(order.id)}>
        <div className={styles.city}>
          <b>
            {order.loading.address.cityName || order.loading.address.street} → {order.landing.address.cityName || order.landing.address.street}
          </b>
        </div>
      </Button>
    </div>
  );
};
