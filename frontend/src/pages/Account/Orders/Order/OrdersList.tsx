import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Indicator, Labels } from 'components';
import { cx, getOrderIndicatorClass, getOrderStatusText, ILabel, IOrder } from 'features';

import { SVGFavorite, SVGDollar, SVGTag, SVGTime, SVGWeight } from 'assets';

import styles from './styles.module.scss';

interface Props {
  orders: IOrder[];

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

interface UserProps extends IOrder {
  activeUserId?: number | null;
  setOpenUser: (id: number) => void;
}

const Order = ({ activeUserId, setOpenUser, ...order }: UserProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <div className={cx(styles.list, activeUserId === order.id && styles.active)}>
      <Button buttonType={'default'} className={styles.link} onClick={() => setOpenUser(order.id)}>
        <div className={styles.city}>
          <b>
            {order.cityFrom} → {order.cityTo}
          </b>
          <Indicator type={getOrderIndicatorClass(order.type)}>{getOrderStatusText(order.type, t)}</Indicator>
        </div>
        <div className={styles.labels}>
          <Labels labels={labels(order)} />
        </div>
      </Button>
      <Button buttonType={['default', 'border']} className={styles.favorite}>
        <SVGFavorite />
      </Button>
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
