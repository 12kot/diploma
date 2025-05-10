import { useEffect, useState } from 'react';

import { cx, EUserRole } from 'features';
import { FullOrder, Filters, Loader } from 'components';
import {
  useAppSelector,
  useGetAddressesQuery,
  useGetAllUsersQuery,
  useGetCargosQuery,
  useLazyGetTransportationsCurrentQuery,
  useLazyGetTransportationsQuery,
} from 'store';

import { OrdersList } from './Order';

import styles from './styles.module.scss';

export const Orders = () => {
  const user = useAppSelector((state) => state.user);

  const [create, setIsCreate] = useState<boolean>(false);
  const [activeOrder, setActiveOrder] = useState<number | null>(null);

  const { data: cargos = [] } = useGetCargosQuery();
  const { data: users = [] } = useGetAllUsersQuery();
  const { data: addresses = [] } = useGetAddressesQuery();
  const [getTransportations, { data = [], isLoading }] = useLazyGetTransportationsQuery();
  const [getTransportationsCurent, { data: transCurrent = [] }] = useLazyGetTransportationsCurrentQuery();

  useEffect(() => {
    getTransportations();
    if (user.role === EUserRole.Driver) getTransportationsCurent();
  }, [user.role]);

  const onSumbit = () => {
    setIsCreate(false);
    setActiveOrder(null);
  };

  const needOrders = user.role === EUserRole.Driver ? transCurrent : data;
  const active = needOrders.find((item) => item.id === activeOrder);

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.container}>
      {activeOrder || create ? (
        <FullOrder
          transportation={active}
          onSumbit={onSumbit}
          users={users}
          setActiveOrder={(v) => setActiveOrder(v)}
          cargos={cargos}
          addresses={addresses}
          canOnChange={user.role !== EUserRole.Driver}
        />
      ) : (
        <div className={cx(styles.content, !!activeOrder && styles.none)}>
          <Filters handleCreate={user.role === EUserRole.Driver ? undefined : () => setIsCreate(true)} />
          <OrdersList orders={needOrders || []} activeUserId={activeOrder} setOpenUser={(v) => setActiveOrder(v)} />
        </div>
      )}
    </div>
  );
};
