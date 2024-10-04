import { NavLink } from 'react-router-dom';

import SVGDashboard from 'assets/svg/SVGDashboard';
import SVGCompany from 'assets/svg/SVGCompany';
import SVGFavorite from 'assets/svg/SVGFavorite';
import SVGUser from 'assets/svg/SVGUser';
import SVGSettings from 'assets/svg/SVGSettings';
import SVGInbox from 'assets/svg/SVGInbox';
import { APP_ROUTES } from 'features';

const navItems = [
  {
    id: 1,
    name: 'Dashboard',
    path: APP_ROUTES.DASHBOARD.INDEX,
    icon: <SVGDashboard />,
  },
  {
    id: 2,
    name: 'Supervisores',
    path: APP_ROUTES.DASHBOARD.SUPERVISORES,
    icon: <SVGCompany />,
    count: 255,
  },
  {
    id: 3,
    name: 'Saved superviso',
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

const AdminMenu = () => {
  return (
    <ul>
      {navItems.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path}>
            <div className="active-indicator" />
            <div className="flex gap-8 align-center">
              {item.icon}
              <p>{item.name}</p>
            </div>
            {item.count && <p className="indicator text-12 flex-center">{item.count}</p>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AdminMenu;
