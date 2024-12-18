import { NavLink } from 'react-router-dom';

import { APP_ROUTES } from 'Router';
import { EUserRole, useAuth } from 'features';
import { Button, H1 } from 'components';

/* УДАЛИТЬ */
const Test = () => {
  const { user, setRole, logout } = useAuth();
  return (
    <div>
      <H1>{user?.role}</H1>
      <Button onClick={() => setRole(EUserRole.Admin)}>ADMIN</Button>
      <Button onClick={() => setRole(EUserRole.Forwarder)}>FORWARDER</Button>
      <Button onClick={() => setRole(EUserRole.Driver)}>DRIVER</Button>
      <Button onClick={() => setRole(EUserRole.Owner)}>OWNER</Button>
      <Button onClick={logout}>LOGOUT</Button>

      <NavLink to={APP_ROUTES.DASHBOARD}>
        GO TO DASHBOARD
      </NavLink>
    </div>
  );
};

export default Test;
