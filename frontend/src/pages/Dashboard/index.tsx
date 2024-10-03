import { useAuth } from 'features';

import DashboardHolder from './Holder';
import DashboardAdmin from './Admin/Dashboard';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardHolder>
      {user?.role === 'admin' && <DashboardAdmin />}
    </DashboardHolder>
  );
};

export default Dashboard;
