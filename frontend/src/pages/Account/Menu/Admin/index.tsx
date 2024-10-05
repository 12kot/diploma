import { NavLink } from 'react-router-dom';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'features';

import SVGDashboard from 'assets/svg/SVGDashboard';
import SVGCompany from 'assets/svg/SVGCompany';
import SVGUser from 'assets/svg/SVGUser';
import SVGSettings from 'assets/svg/SVGSettings';
import SVGInbox from 'assets/svg/SVGInbox';
import SVGCar from 'assets/svg/SVGCar';

const navItems = (t: TFunction<['menuHolder'], undefined>) => [
  {
    id: 1,
    name: t('menuHolder:links.dashboard'),
    path: APP_ROUTES.DASHBOARD.INDEX,
    icon: <SVGDashboard />,
  },
  {
    id: 2,
    name: t('menuHolder:links.forwarders'),
    path: APP_ROUTES.DASHBOARD.FORWARDERS,
    icon: <SVGCompany />,
    count: 255,
  },
  {
    id: 3,
    name: t('menuHolder:links.drivers'),
    path: APP_ROUTES.DASHBOARD.DRIVERS,
    icon: <SVGCar />,
    count: 8,
  },
  {
    id: 4,
    name: t('menuHolder:links.profile'),
    path: '/profile',
    icon: <SVGUser />,
  },
  {
    id: 5,
    name: t('menuHolder:links.settings'),
    path: '/settings',
    icon: <SVGSettings />,
  },
  {
    id: 6,
    name: t('menuHolder:links.applications'),
    path: '/applications',
    icon: <SVGInbox />,
    count: 31,
  },
];

const AdminMenu = () => {
  const { t } = useTranslation(['menuHolder']);

  return (
    <ul>
      {navItems(t).map((item) => (
        <li key={item.id}>
          <NavLink to={item.path}>
            <div className="active-indicator" />
            <div className="flex gap-8 align-center">
              {item.icon}
              <p className='clamp'>{item.name}</p>
            </div>
            {item.count && <p className="indicator text-12 flex-center">{item.count}</p>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AdminMenu;
