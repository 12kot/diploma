import { NavLink } from 'react-router-dom';

import { APP_ROUTES } from 'Router';
import { EUserRole, useAuth } from 'features';
import { H1 } from 'components';

/* УДАЛИТЬ */
const Test = () => {
  const { user, setRole, logout } = useAuth();
  return (
    <div className="flex-col gap">
      <H1>{user?.role}</H1>
      <button onClick={() => setRole(EUserRole.Admin)}>ADMIN</button>
      <button onClick={() => setRole(EUserRole.Forwarder)}>FORWARDER</button>
      <button onClick={() => setRole(EUserRole.Driver)}>DRIVER</button>
      <button onClick={() => setRole(EUserRole.Owner)}>OWNER</button>
      <button onClick={logout}>LOGOUT</button>

      <NavLink to={APP_ROUTES.DASHBOARD} className="btn">
        GO TO DASHBOARD
      </NavLink>
    </div>
  );
};

export default Test;
