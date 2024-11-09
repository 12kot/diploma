import { useTranslation } from 'react-i18next';

import { Indicator } from 'components';
import { getOrderIndicatorClass, getOrderStatusText, IOrder } from 'features';

import { SVGDollar, SVGTag, SVGTime, SVGWeight } from 'assets';

import styles from "./styles.module.scss";

interface OrderProps extends IOrder {
  setActiveOrder: (v: number) => void;
}

export const Order = ({
  id,
  cityFrom,
  cityTo,
  loadedDate,
  unloadedDate,
  cost,
  weight,
  type,
  setActiveOrder,
}: OrderProps) => {
  const { t } = useTranslation('dashboard');

  return (
    <section className={styles.container}>
      <p>
        {cityFrom} → {cityTo}
      </p>
      <div className={styles.content}>
        <Indicator type={getOrderIndicatorClass(type)}>{getOrderStatusText(type, t)}</Indicator>
        <Indicator type={"border"} icon={<SVGDollar />}>{cost}</Indicator>
        <Indicator type={"border"} icon={<SVGTag />}>{id}</Indicator>
        <Indicator type={"border"} icon={<SVGTime />}> {loadedDate} - {unloadedDate}</Indicator>
        <Indicator type={"border"} icon={<SVGWeight />}>{weight}</Indicator>
      </div>
      <button onClick={() => setActiveOrder(id)} className={styles.button} />
    </section>
  );
};
