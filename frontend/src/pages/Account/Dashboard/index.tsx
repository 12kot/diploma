import { useAuth } from 'features';

import AccountHolder from '../Holder';
import DashboardAdmin from './Admin';

const Dashboard = () => {
  const { user } = useAuth();

  return <AccountHolder>{user?.role === 'admin' && <DashboardAdmin />}</AccountHolder>;
};

export default Dashboard;
