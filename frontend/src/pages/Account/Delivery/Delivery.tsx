import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { cx } from 'features';
import { Filters, Loader } from 'components';

import styles from './styles.module.scss';
import { useGetAddressesQuery, useGetDeliveryQuery } from 'store';
import { DeliveryList } from './DeliveryList';
import { ActiveDelivery } from './ActiveDelivery';

export const Delivery = () => {
  const location = useLocation();
  const { data: addresses = [] } = useGetAddressesQuery();
  const { data: delivery = [], isLoading } = useGetDeliveryQuery();
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [openDelivery, setOpenDelivery] = useState<number>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setOpenDelivery(undefined);
  }, [location.pathname]);

  useEffect(() => {
    const userId = searchParams.get('a');
    if (userId) {
      setOpenDelivery(Number(userId));
    }
  }, [searchParams]);

  const handleCreateDeliveryStatus = () => {
    setIsCreate((v) => !v);
  };

  const onCreateDelivery = () => {
    handleCreateDeliveryStatus();
  };

  const handleOpenDelivery = useCallback(
    (id: number) => {
      setOpenDelivery(id);
      setIsCreate(false);

      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.set('a', String(id));

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

  const activeDelivery = delivery.find((Delivery) => Delivery.id === openDelivery);

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  return (
    <div className={cx(styles.container, (isCreate || openDelivery !== undefined) && styles.grid)}>
      <div className={styles.list}>
        <Filters handleCreate={handleCreateDeliveryStatus} />
        <DeliveryList delivery={delivery} activeDeliveryId={openDelivery} setOpenDelivery={handleOpenDelivery} />
      </div>
      {(isCreate || openDelivery !== undefined) && (
        <ActiveDelivery
          onCreate={onCreateDelivery}
          isCreate={isCreate}
          addresses={addresses}
          delivery={isCreate ? undefined : activeDelivery}
          closeActiveDelivery={() => {
            setIsCreate(false);
            setOpenDelivery(undefined);
          }}
        />
      )}
    </div>
  );
};
