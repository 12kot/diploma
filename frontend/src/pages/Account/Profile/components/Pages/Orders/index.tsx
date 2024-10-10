import { useState } from 'react';

import { IOrder } from 'features';
import { ActiveOrder, Order } from 'components';

const ProfileOrders = () => {
  const [activeOrder, setActiveOrder] = useState<number | null>();

  if (activeOrder)
    return (
      <div className="profile-orders-active">
        <ActiveOrder setActiveOrder={setActiveOrder} />
      </div>
    );

  return (
    <div className="profile-padding profile-orders gap">
      {orders.map((order) => (
        <Order {...order} key={order.id} setActiveOrder={(v) => setActiveOrder(v)} />
      ))}
    </div>
  );
};

export default ProfileOrders;

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
