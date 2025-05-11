import { useMemo } from 'react';

import { cx, IDelivery } from 'features';

import styles from './styles.module.scss';

interface Props {
  delivery: IDelivery[];

  activeDeliveryId?: number;
  setOpenDelivery: (id: number) => void;
}

export const DeliveryList = ({ delivery, activeDeliveryId, setOpenDelivery }: Props) => {
  const memoUsers = useMemo(() => {
    return delivery.map((del) => (
      <Delivery key={del.id} activeDeliveryId={activeDeliveryId} setOpenDelivery={setOpenDelivery} {...del} />
    ));
  }, [delivery, activeDeliveryId, setOpenDelivery]);

  return <section className={styles.container}>{memoUsers}</section>;
};

interface DeliveryProps extends IDelivery {
  activeDeliveryId?: number;
  setOpenDelivery: (id: number) => void;
}

const Delivery = ({ activeDeliveryId, id, setOpenDelivery, address, date, loadType }: DeliveryProps) => {
  return (
    <button className={cx(styles.item, activeDeliveryId === id && styles.active)} onClick={() => setOpenDelivery(id)}>
      <b>{[address.countryName, address.cityName, address.street, address.apartment].filter(Boolean).join(', ')}</b>
      {loadType}, {new Date(date).toDateString()}
    </button>
  );
};
