import { UsersChart } from './Users/UsersChart';
import { OrdersChart } from './Orders';
import { LoaderChart } from './LoaderPreview';
import { EarnedChart } from './Earned';

export const DashboardCharts = () => {
  return (
    <section className="account-container--dashboard -charts media-full-1200 ">
      <UsersChart />
      <OrdersChart />
      <LoaderChart />
      <EarnedChart />
    </section>
  );
};
