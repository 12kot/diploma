import { useState } from 'react';

import { ActiveUser, UsersList, UsersFilters } from 'components/DashboardUsers';

import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';
import { IUser } from 'features';

const DriversContainer = () => {
  const [openUser, setOpenUser] = useState<number>();

  const handleOpenUser = (id: number) => {
    setOpenUser(id);
  };

  return (
    <div className={`users-container ${openUser && '--users-grid'}`}>
      <div className="flex-col w-full --users-grid -first">
        <UsersFilters />
        <UsersList users={supervisores} activeUserId={openUser} setOpenUser={handleOpenUser} />
      </div>
      {openUser && <ActiveUser user={supervisores[openUser - 1]} />}
    </div>
  );
};

export default DriversContainer;

const supervisores: IUser[] = [
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
