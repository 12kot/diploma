import { useAuth } from 'features';

import AccountHolder from '../Holder';
import CompaniesAdmin from './Admin';

const Companies = () => {
  const { user } = useAuth();

  return <AccountHolder>{user?.role === 'admin' && <CompaniesAdmin />}</AccountHolder>;
};

export default Companies;
