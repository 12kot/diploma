import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Filters } from 'components';
import { useAppSelector } from 'store';
import { IUser, EUserRole, cx } from 'features';
import { ActiveUser, UsersList } from 'components/DashboardUsers';

import styles from './styles.module.scss';

export const Users = () => {
  const [openUser, setOpenUser] = useState<number>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const userRole = useAppSelector((state) => state.user.role);

  useEffect(() => {
    setOpenUser(undefined);
  }, [location.pathname]);

  useEffect(() => {
    const userId = searchParams.get('openUser');
    if (userId) {
      setOpenUser(Number(userId));
    }
  }, [searchParams]);

  const handleOpenUser = useCallback(
    (id: number) => {
      setOpenUser(id);

      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.set('openUser', String(id));

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams],
  );

  const users = getUserType(location.pathname.slice(location.pathname.lastIndexOf('/') + 1) as EUserRole);

  return (
    <div className={cx(styles.container, openUser && styles.grid)}>
      <div className={styles.list}>
        <Filters />
        <UsersList users={users} activeUserId={openUser} setOpenUser={handleOpenUser} />
      </div>
      {openUser && (
        <ActiveUser user={users[openUser - 1]} closeActiveUser={() => setOpenUser(undefined)} userRole={userRole} />
      )}
    </div>
  );
};

const getUserType = (userType?: EUserRole) => {
  if (userType === EUserRole.Driver) return drivers;
  if (userType === EUserRole.Forwarder) return supervisores;
  return owners;
};

const supervisores: IUser[] = [
  {
    id: 1,
    enabled: true,
    name: 'Hanna Cargo Limited',
    role: EUserRole.Forwarder,
  },
  {
    id: 2,
    enabled: false,
    name: 'Nikitoshas LCD',
    role: EUserRole.Forwarder,
  },
  {
    id: 3,
    enabled: true,
    name: 'Company name 1',
    role: EUserRole.Forwarder,
  },

  {
    id: 4,
    enabled: false,
    name: 'Company name 2',
    role: EUserRole.Forwarder,
  },
  {
    id: 5,
    enabled: false,
    name: 'Company name 3',
    role: EUserRole.Forwarder,
  },
] as IUser[];

const drivers: IUser[] = [
  {
    id: 1,
    enabled: false,
    name: 'Hanna Driver Limited',
    role: EUserRole.Driver,
  },
  {
    id: 2,
    enabled: false,
    name: 'Nikitoshas LCD Driver',
    role: EUserRole.Driver,
  },
  {
    id: 3,
    enabled: true,
    name: 'Driver name 1',
    role: EUserRole.Driver,
  },
  {
    id: 4,
    enabled: false,
    name: 'Driver name 2',
    role: EUserRole.Driver,
  },
  {
    id: 5,
    enabled: true,
    name: 'Driver name 3',
    role: EUserRole.Driver,
  },
] as IUser[];

const owners: IUser[] = [
  {
    id: 1,
    enabled: false,
    name: 'Hanna Owner Limited',
    role: EUserRole.Owner,
  },
  {
    id: 2,
    enabled: false,
    name: 'Nikitoshas LCD Driver',
    role: EUserRole.Owner,
  },
  {
    id: 3,
    enabled: true,
    name: 'Driver name 1',
    role: EUserRole.Owner,
  },
  {
    id: 4,
    enabled: false,
    name: 'Driver name 2',
    role: EUserRole.Owner,
  },
  {
    id: 5,
    enabled: true,
    name: 'Driver name 3',
    role: EUserRole.Owner,
  },
] as IUser[];
