import UsersChart from './Users';
import OrdersChart from './Orders';
import LoaderChart from './LoaderPreview';
import EarnedChart from './Earned';

const DashboardCharts = () => {
  return (
    <section className="account-container--dashboard -charts">
      <UsersChart />
      <OrdersChart />
      <LoaderChart />
      <EarnedChart />
    </section>
  );
};

export default DashboardCharts;
