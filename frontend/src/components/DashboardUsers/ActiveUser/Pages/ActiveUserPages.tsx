import { useState } from 'react';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { Button } from 'components';
import { cx, EUserRole, IUser, useAuth } from 'features';

import { Orders, ActiveUserChat, ActiveUserAbout, AcriveUserAnalitics } from './components';

import { SVGAnalitics, SVGChat, SVGInfo, SVGCar } from 'assets';

import styles from './styles.module.scss';

type IPageTypes = 'chat' | 'about' | 'analitics' | 'orders';

interface IPage {
  name: string;
  icon: JSX.Element;
  value: IPageTypes;
  sees: EUserRole[];
  has: EUserRole[];
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
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    has: [EUserRole.Forwarder, EUserRole.Driver, EUserRole.Owner],
  },
  {
    name: t('pages.list.analitics'),
    icon: <SVGAnalitics />,
    value: 'analitics',
    sees: [EUserRole.Admin],
    has: [EUserRole.Driver, EUserRole.Owner],
  },
  {
    name: t('pages.list.orders'),
    icon: <SVGCar />,
    value: 'orders',
    sees: [EUserRole.Admin, EUserRole.Forwarder],
    has: [EUserRole.Driver, EUserRole.Owner],
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
    return pages(t).filter(
      (page) => page.has.includes(activeUser.role) && page.sees.includes(user?.role || EUserRole.Admin),
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.list}>
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
    <Button
      buttonType={'default'}
      className={cx(styles.page, activePage === page.value && styles.active)}
      onClick={() => setActivePage(page.value)}>
      {page.icon}
      <b className={styles.name}>{page.name}</b>
    </Button>
  );
};
