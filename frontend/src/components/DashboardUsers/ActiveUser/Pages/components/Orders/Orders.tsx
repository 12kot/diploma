import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ActiveOrder } from './ActiveOrder';
import { getOrderIndicatorClass, getOrderStatusText } from 'features/utils/orderStatus';

import SVGDollar from 'assets/svg/SVGDollar';
import SVGTag from 'assets/svg/SVGTag';
import SVGTime from 'assets/svg/SVGTime';
import SVGWeight from 'assets/svg/SVGWeight';


interface IOrder {
  id: number;
  cityFrom: string;
  cityTo: string;
  loadedDate: string;
  unloadedDate: string;
  cost: number;
  weight: string;
  type: 'loading' | 'closed' | 'way';
}

const orders: IOrder[] = [
  {
    id: 10028932983,
    cityFrom: 'Warsaw',
    cityTo: 'Hrodna',
    loadedDate: '25.09.2024',
    unloadedDate: '01.12.2024',
    cost: 25000,
    weight: '25T',
    type: 'loading',
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

  if (activeOrder) return <ActiveOrder setActiveOrder={setActiveOrder} />;

  return (
    <div className="mt-16 pages-analitics flex-col gap wrap">
      {orders.map((order) => (
        <Order {...order} key={order.id} setActiveOrder={(v) => setActiveOrder(v)} />
      ))}
    </div>
  );
};

interface OrderProps extends IOrder {
  setActiveOrder: (v: number) => void;
}

const Order = ({ id, cityFrom, cityTo, loadedDate, unloadedDate, cost, weight, type, setActiveOrder }: OrderProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <button className="--transparent flex-start flex-col gap-mini" onClick={() => setActiveOrder(id)}>
      <p>
        {cityFrom} → {cityTo}
      </p>
      <div className="flex gap-mini wrap">
        <p className={`indicator ${getOrderIndicatorClass(type)}`}>{getOrderStatusText(type, t)}</p>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGDollar />
          <p>{cost}</p>
        </div>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGTag />
          <p>{id}</p>
        </div>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGTime />
          <p>
            {loadedDate} - {unloadedDate}
          </p>
        </div>
        <div className="iflex gap-mini indicator -border nowrap">
          <SVGWeight />
          <p>{weight}</p>
        </div>
      </div>
    </button>
  );
};
