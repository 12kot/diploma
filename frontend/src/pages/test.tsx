import { H1 } from 'components';
import { APP_ROUTES, useAuth } from 'features';
import { NavLink } from 'react-router-dom';

/* УДАЛИТЬ */
const Test = () => {
  const { user, setRole, logout } = useAuth();
  return (
    <div className="flex-col gap">
      <H1>{user?.role}</H1>
      <button onClick={() => setRole('admin')}>ADMIN</button>
      <button onClick={() => setRole('forwarder')}>FORWARDER</button>
      <button onClick={() => setRole('driver')}>DRIVER</button>
      <button onClick={() => setRole('owner')}>OWNER</button>
      <button onClick={logout}>LOGOUT</button>

      <NavLink to={APP_ROUTES.DASHBOARD.INDEX} className="btn">GO TO DASHBOARD</NavLink>
    </div>
  );
};

export default Test;
