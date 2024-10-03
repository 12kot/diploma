import { NavLink } from 'react-router-dom';

import SVGDashboard from 'assets/svg/SVGDashboard';
import SVGCompany from 'assets/svg/SVGCompany';
import SVGFavorite from 'assets/svg/SVGFavorite';
import SVGUser from 'assets/svg/SVGUser';
import SVGSettings from 'assets/svg/SVGSettings';
import SVGInbox from 'assets/svg/SVGInbox';

const navItems = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
    icon: <SVGDashboard />,
  },
  {
    id: 2,
    name: 'Companies',
    path: '/companies',
    icon: <SVGCompany />,
    count: 255,
  },
  {
    id: 3,
    name: 'Saved companies',
    path: '/favorite',
    icon: <SVGFavorite />,
    count: 8,
  },
  {
    id: 4,
    name: 'Profile',
    path: '/profile',
    icon: <SVGUser />,
  },
  {
    id: 5,
    name: 'Settings',
    path: '/settings',
    icon: <SVGSettings />,
  },
  {
    id: 6,
    name: 'Applications',
    path: '/applications',
    icon: <SVGInbox />,
    count: 31,
  },
];

const DashboardAdminMenu = () => {
  return (
    <ul>
      {navItems.map((item) => (
        <li className={`${item.id === 1 && 'active'}`} key={item.id}>
          <div className="active-indicator" />
          <div className="flex gap-8 align-center">
            {item.icon}
            <NavLink to="/">{item.name}</NavLink>
          </div>
          {item.count && <p className="indicator text-12 flex-center">{item.count}</p>}
        </li>
      ))}
    </ul>
  );
};

export default DashboardAdminMenu;
