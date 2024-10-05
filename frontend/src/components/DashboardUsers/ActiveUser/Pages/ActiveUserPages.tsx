import { useState } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { IUser, IUserRole, useAuth } from 'features';

import { ActiveUserChat } from './components/Chat';
import { ActiveUserAbout } from './components/About';
import { AcriveUserAnalitics } from './components/Analitics';

import SVGAnalitics from 'assets/svg/SVGAnalitics';
import SVGChat from 'assets/svg/SVGChat';
import SVGInfo from 'assets/svg/SVGInfo';
import SVGCar from 'assets/svg/SVGCar';

type IPageTypes = 'chat' | 'about' | 'analitics' | 'orders';

interface IPage {
  name: string;
  icon: JSX.Element;
  value: IPageTypes;
  sees: IUserRole[];
  has: IUserRole[];
}

const pages = (t: TFunction<['dashboard'], undefined>): IPage[] => [
  {
    name: t('forwarders.active.pages.chat'),
    icon: <SVGChat />,
    value: 'chat',
    sees: ['admin', 'forwarder', 'driver'],
    has: ['admin', 'forwarder', 'driver'],
  },
  {
    name: t('forwarders.active.pages.about'),
    icon: <SVGInfo />,
    value: 'about',
    sees: ['admin', 'forwarder', 'driver'],
    has: ['admin', 'forwarder', 'driver'],
  },
  {
    name: t('forwarders.active.pages.analitics'),
    icon: <SVGAnalitics />,
    value: 'analitics',
    sees: ['admin'],
    has: ['forwarder', 'driver'],
  },
  {
    name: t('forwarders.active.pages.orders'),
    icon: <SVGCar />,
    value: 'orders',
    sees: ['admin', 'forwarder'],
    has: ['driver'],
  },
];

interface Props {
  activeUser: IUser;
}

export const ActiveUserPages = ({ activeUser }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation(['dashboard']);
  const [activePage, setActivePage] = useState<IPageTypes>(user?.role === 'admin' ? 'chat' : 'about');

  const getAvaliablePages = () => {
    return pages(t).filter((page) => page.has.includes(activeUser.role) && page.sees.includes(user?.role || 'driver'));
  };

  return (
    <section className="flex-col pages">
      <div className="flex pages-header">
        {getAvaliablePages().map((page, i) => (
          <Page key={i} page={page} setActivePage={setActivePage} activePage={activePage} />
        ))}
      </div>
      {activePage === 'chat' && <ActiveUserChat />}
      {activePage === 'about' && <ActiveUserAbout role={activeUser.role} isBanned={activeUser.isBanned} />}
      {activePage === 'analitics' && <AcriveUserAnalitics />}
    </section>
  );
};

interface PageProps {
  setActivePage: (v: IPageTypes) => void;
  activePage: IPageTypes;
  page: IPage;
}

const Page = ({ setActivePage, activePage, page }: PageProps) => {
  return (
    <button
      className={`--default gap-mini w-full ${activePage === page.value && 'active'}`}
      onClick={() => setActivePage(page.value)}>
      {page.icon}
      <p>
        <b className="text-14">{page.name}</b>
      </p>
    </button>
  );
};
