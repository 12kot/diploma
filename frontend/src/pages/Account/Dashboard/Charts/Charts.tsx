import { UsersChart } from './Users/UsersChart';
import { OrdersChart } from './Orders';
import { LoaderChart } from './LoaderPreview';
import { EarnedChart } from './Earned';

import styles from './styles.module.scss';

export const DashboardCharts = () => {
  return (
    <section className={styles.container}>
      <UsersChart />
      <OrdersChart />
      <LoaderChart />
      <EarnedChart />
    </section>
  );
};
