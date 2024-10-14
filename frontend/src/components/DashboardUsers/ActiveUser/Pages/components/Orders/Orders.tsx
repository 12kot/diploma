import { useState } from 'react';

import { IOrder } from 'features';
import { ActiveOrder, Order } from 'components/Order';

import styles from "./styles.module.scss";

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

export const Orders = () => {
  const [activeOrder, setActiveOrder] = useState<number | null>();

  if (activeOrder) return <div className='mt-16'><ActiveOrder setActiveOrder={setActiveOrder} /></div>

  return (
    <div className={`${styles.container} mt-16 flex-col gap wrap`}>
      {orders.map((order) => (
        <Order {...order} key={order.id} setActiveOrder={(v) => setActiveOrder(v)} />
      ))}
    </div>
  );
};