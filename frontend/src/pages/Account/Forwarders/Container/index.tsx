import { useState } from 'react';

import { ActiveUser, UsersList, UsersFilters } from 'components/DashboardUsers';

import SVGEarth from 'assets/svg/SVGEarth';
import SVGTrendingUp from 'assets/svg/SVGTrendingUp';
import { IUser } from 'features';

const ForwardersContainer = () => {
  const [openCompany, setOpenCompany] = useState<number>();

  const handleOpenCompany = (id: number) => {
    setOpenCompany(id);
  }

  return (
    <div className={`users-container ${openCompany && '--users-grid'}`}>
      <div className="flex-col w-full --users-grid -first">
        <UsersFilters />
        <UsersList forwarders={supervisores} activeCompanyId={openCompany} setOpenCompane={handleOpenCompany} />
      </div>
      {openCompany && <ActiveUser forwarder={supervisores[openCompany - 1]} />}
    </div>
  );
};

export default ForwardersContainer;

const supervisores: IUser[] = [
  {
    id: 1,
    name: 'Hanna Cargo Limited',
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
    name: 'Nikitoshas LCD',
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
    name: 'Company name 1',
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
    name: 'Company name 2',
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
    name: 'Company name 3',
    labels: [
      {
        id: 1,
        icon: <SVGTrendingUp />,
        name: '1000 Orders',
      },
    ],
  },
];
