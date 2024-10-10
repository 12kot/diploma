import { useState } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { IUser, IUserRole, useAuth } from 'features';

import { Orders } from './components/Orders';
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
    name: t('pages.list.chat'),
    icon: <SVGChat />,
    value: 'chat',
    sees: [],
    has: [],
  },
  {
    name: t('pages.list.about'),
    icon: <SVGInfo />,
    value: 'about',
    sees: ['admin', 'forwarder'],
    has: ['forwarder', 'driver', 'owner'],
  },
  {
    name: t('pages.list.analitics'),
    icon: <SVGAnalitics />,
    value: 'analitics',
    sees: ['admin'],
    has: ['driver', 'owner'],
  },
  {
    name: t('pages.list.orders'),
    icon: <SVGCar />,
    value: 'orders',
    sees: ['admin', 'forwarder'],
    has: ['driver', 'owner'],
  },
];

interface Props {
  activeUser: IUser;
}

export const ActiveUserPages = ({ activeUser }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation(['dashboard']);
  const [activePage, setActivePage] = useState<IPageTypes>('about');

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
      {activePage === 'orders' && <Orders />}
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
