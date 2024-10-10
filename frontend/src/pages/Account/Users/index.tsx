import { useCallback, useEffect, useState } from 'react';

import { IUser, IUserRole } from 'features';
import { Filters } from 'components';
import { ActiveUser, UsersList } from 'components/DashboardUsers';

import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';
import { useParams, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [openUser, setOpenUser] = useState<number>();
  const { userType } = useParams<{ userType: IUserRole }>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setOpenUser(undefined);
  }, [userType]);

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

  const users = getUserType(userType as IUserRole);

  return (
    <div className={`users-container ${openUser && '--users-grid'}`}>
      <div className="flex-col w-full --users-grid -first">
        <Filters />
        <UsersList users={users} activeUserId={openUser} setOpenUser={handleOpenUser} />
      </div>
      {openUser && <ActiveUser user={users[openUser - 1]} />}
    </div>
  );
};

export default Users;

const getUserType = (userType?: IUserRole) => {
  if (userType === 'driver') return drivers;
  if (userType === 'forwarder') return supervisores;
  return owners;
};

const supervisores: IUser[] = [
  {
    id: 1,
    isBanned: false,
    name: 'Hanna Cargo Limited',
    role: 'forwarder',
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
    role: 'forwarder',
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
    role: 'forwarder',
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
    role: 'forwarder',
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
    role: 'forwarder',
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
    role: 'driver',
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
    role: 'driver',
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
    role: 'driver',
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
    role: 'driver',
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
    role: 'driver',
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
    role: 'owner',
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
    role: 'owner',
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
    role: 'owner',
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
    role: 'owner',
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
    role: 'owner',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
];
