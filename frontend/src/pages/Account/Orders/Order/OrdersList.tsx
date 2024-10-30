import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Labels } from 'components';
import { getOrderIndicatorClass, getOrderStatusText, ILabel, IOrder } from 'features';

import SVGFavorite from 'assets/svg/SVGFavorite';
import SVGDollar from 'assets/svg/SVGDollar';
import SVGTag from 'assets/svg/SVGTag';
import SVGTime from 'assets/svg/SVGTime';
import SVGWeight from 'assets/svg/SVGWeight';

interface Props {
  orders: IOrder[];

  activeUserId?: number | null;
  setOpenUser: (id: number) => void;
}

export const OrdersList = ({ orders, activeUserId, setOpenUser }: Props) => {
  const memoOrders = useMemo(() => {
    return orders.map((order) => (
      <Order key={order.id} activeUserId={activeUserId} setOpenUser={setOpenUser} {...order} />
    ));
  }, [orders, activeUserId, setOpenUser]);

  return <section className="users-container-list flex-col w-full">{memoOrders}</section>;
};

interface UserProps extends IOrder {
  activeUserId?: number | null;
  setOpenUser: (id: number) => void;
}

const Order = ({ activeUserId, setOpenUser, ...order }: UserProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <div className={`flex-between item w-full align-center ${activeUserId === order.id && 'active'}`}>
      <button className="--default flex-col gap-mini w-full item-link h-full overflow" onClick={() => setOpenUser(order.id)}>
        <div className="flex gap-mini align-center">
          <b>
            {order.cityFrom} → {order.cityTo}
          </b>
          <p className={`indicator ${getOrderIndicatorClass(order.type)}`}>{getOrderStatusText(order.type, t)}</p>
        </div>
        <div className="overflow-y-auto w-full flex">
          <Labels labels={labels(order)} />
        </div>
      </button>
      <button className="--default --border square rounded p-0">
        <SVGFavorite />
      </button>
    </div>
  );
};

const labels = (order: IOrder): ILabel[] => [
  {
    id: 1,
    icon: <SVGDollar />,
    name: order.cost + '',
  },
  {
    id: 2,
    icon: <SVGTag />,
    name: order.id + '',
  },
  {
    id: 3,
    icon: <SVGTime />,
    name: `${order.loadedDate} - ${order.unloadedDate}`,
  },
  {
    id: 4,
    icon: <SVGWeight />,
    name: order.weight,
  },
];
