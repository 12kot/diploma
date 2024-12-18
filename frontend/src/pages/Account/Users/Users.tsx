import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Filters } from 'components';
import { IUser, EUserRole, cx } from 'features';
import { ActiveUser, UsersList } from 'components/DashboardUsers';

import {SVGEarth, SVGTrendingUp} from 'assets';

import styles from './styles.module.scss';

export const Users = () => {
  const [openUser, setOpenUser] = useState<number>();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

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
      <div className={cx(styles.list)}>
        <Filters />
        <UsersList users={users} activeUserId={openUser} setOpenUser={handleOpenUser} />
      </div>
      {openUser && <ActiveUser user={users[openUser - 1]} closeActiveUser={() => setOpenUser(undefined)} />}
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
    isBanned: false,
    name: 'Hanna Cargo Limited',
    role: EUserRole.Forwarder,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 2,
        icon: <SVGEarth />,
        name: 'Wroclaw Poland',
      },
    ],
  },
  {
    id: 2,
    isBanned: false,
    name: 'Nikitoshas LCD',
    role: EUserRole.Forwarder,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
      {
        id: 2,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 3,
        icon: <SVGEarth />,
        name: 'Hrodna, Belarus',
      },
    ],
  },
  {
    id: 3,
    isBanned: true,
    name: 'Company name 1',
    role: EUserRole.Forwarder,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },

  {
    id: 4,
    isBanned: true,
    name: 'Company name 2',
    role: EUserRole.Forwarder,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 5,
    isBanned: true,
    name: 'Company name 3',
    role: EUserRole.Forwarder,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
];

const drivers: IUser[] = [
  {
    id: 1,
    isBanned: false,
    name: 'Hanna Driver Limited',
    role: EUserRole.Driver,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 2,
        icon: <SVGEarth />,
        name: 'Wroclaw Poland',
      },
    ],
  },
  {
    id: 2,
    isBanned: false,
    name: 'Nikitoshas LCD Driver',
    role: EUserRole.Driver,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
      {
        id: 2,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 3,
        icon: <SVGEarth />,
        name: 'Hrodna, Belarus',
      },
    ],
  },
  {
    id: 3,
    isBanned: true,
    name: 'Driver name 1',
    role: EUserRole.Driver,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 4,
    isBanned: false,
    name: 'Driver name 2',
    role: EUserRole.Driver,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 5,
    isBanned: true,
    name: 'Driver name 3',
    role: EUserRole.Driver,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
];

const owners: IUser[] = [
  {
    id: 1,
    isBanned: false,
    name: 'Hanna Owner Limited',
    role: EUserRole.Owner,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 2,
        icon: <SVGEarth />,
        name: 'Wroclaw Poland',
      },
    ],
  },
  {
    id: 2,
    isBanned: false,
    name: 'Nikitoshas LCD Driver',
    role: EUserRole.Owner,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
      {
        id: 2,
        icon: <SVGTrendingUp />,
        name: '5.0',
      },
      {
        id: 3,
        icon: <SVGEarth />,
        name: 'Hrodna, Belarus',
      },
    ],
  },
  {
    id: 3,
    isBanned: true,
    name: 'Driver name 1',
    role: EUserRole.Owner,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 4,
    isBanned: false,
    name: 'Driver name 2',
    role: EUserRole.Owner,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
  {
    id: 5,
    isBanned: true,
    name: 'Driver name 3',
    role: EUserRole.Owner,
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
];
