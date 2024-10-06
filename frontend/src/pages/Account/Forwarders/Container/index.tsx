import { useState } from 'react';

import { ActiveUser, UsersList, Filters } from 'components/DashboardUsers';
import { IUser } from 'features';

import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';

const ForwardersContainer = () => {
  const [openUser, setOpenUser] = useState<number>();

  const handleOpenUser = (id: number) => {
    setOpenUser(id);
  };

  return (
    <div className={`users-container ${openUser && '--users-grid'}`}>
      <div className="flex-col w-full --users-grid -first">
        <Filters />
        <UsersList users={supervisores} activeUserId={openUser} setOpenUser={handleOpenUser} />
      </div>
      {openUser && <ActiveUser user={supervisores[openUser - 1]} />}
    </div>
  );
};

export default ForwardersContainer;

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
