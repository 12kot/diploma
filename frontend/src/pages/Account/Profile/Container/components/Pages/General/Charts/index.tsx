import UsersChart from './Users';
import OrdersChart from './Orders';
import LoaderChart from './LoaderPreview';
import EarnedChart from './Earned';

const ProfileCharts = () => {
  return (
    <div className="profile-grid-second-charts">
      <UsersChart />
      <OrdersChart />
      <LoaderChart />
      <EarnedChart />
    </div>
  );
};

export default ProfileCharts;
