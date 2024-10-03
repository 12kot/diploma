import { useAuth } from 'features';
import DashboardHolder from './Holder';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardHolder>
      <div className='dashboard-container--form'>Dashboard</div>
    </DashboardHolder>
  );
};

export default Dashboard;
