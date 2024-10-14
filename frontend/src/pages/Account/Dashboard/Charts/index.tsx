import UsersChart from './Users';
import OrdersChart from './Orders';
import LoaderChart from './LoaderPreview';
import EarnedChart from './Earned';

const DashboardCharts = () => {
  return (
    <section className="account-container--dashboard -charts media-full-1200 ">
      <UsersChart />
      <OrdersChart />
      <LoaderChart />
      <EarnedChart />
    </section>
  );
};

export default DashboardCharts;
