import DashboardCharts from './Charts';
import TotalInfo from './Total';

const DashboardAdmin = () => {
  return (
    <div className="dashboard-container--dashboard flex-col gap">
      <TotalInfo />
      <DashboardCharts />
    </div>
  );
};

export default DashboardAdmin;
