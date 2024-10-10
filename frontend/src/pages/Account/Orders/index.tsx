import { useState } from 'react';

import { IOrder } from 'features';
import { FullOrder, Filters } from 'components';
import { OrdersList } from './Order';

const Orders = () => {
  const [activeOrder, setActiveOrder] = useState<number | null>();

  return (
    <div className={`order-container ${activeOrder && '-orders-grid'}`}>
      <div className={`flex-col w-full ${activeOrder && 'none'}`}>
        <Filters />
        <OrdersList orders={orders} activeUserId={activeOrder} setOpenUser={(v) => setActiveOrder(v)} />
      </div>
      {activeOrder && <FullOrder setActiveOrder={(v) => setActiveOrder(v)} />}
    </div>
  );
};

export default Orders;

const orders: IOrder[] = [
  {
    id: 10028932983,
    cityFrom: 'Warsaw',
    cityTo: 'Hrodna',
    loadedDate: '25.09.2024',
    unloadedDate: '01.12.2024',
    cost: 25000,
    weight: '25T',
    type: 'waiting',
  },
  {
    id: 10028931283,
    cityFrom: 'Warsaw',
    cityTo: 'Hrodna',
    loadedDate: '25.09.2024',
    unloadedDate: '01.12.2024',
    cost: 25000,
    weight: '25T',
    type: 'way',
  },
  {
    id: 10028232983,
    cityFrom: 'Warsaw',
    cityTo: 'Hrodna',
    loadedDate: '25.09.2024',
    unloadedDate: '01.12.2024',
    cost: 25000,
    weight: '25T',
    type: 'closed',
  },
  {
    id: 1034932983,
    cityFrom: 'Warsaw',
    cityTo: 'Hrodna',
    loadedDate: '25.09.2024',
    unloadedDate: '01.12.2024',
    cost: 25000,
    weight: '25T',
    type: 'closed',
  },
  {
    id: 1005648932983,
    cityFrom: 'Warsaw',
    cityTo: 'Hrodna',
    loadedDate: '25.09.2024',
    unloadedDate: '01.12.2024',
    cost: 25000,
    weight: '25T',
    type: 'closed',
  },
];
