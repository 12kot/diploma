import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';

import { IProfilePage, IProfilePageType } from 'features';

const profilePages = (t: TFunction<'dashboard', undefined>): IProfilePage[] => [
  {
    id: 1,
    name: t('profile.pages.general'),
    type: 'general',
  },
  {
    id: 3,
    name: t('profile.pages.orders'),
    type: 'orders',
  },
];

interface Props {
  activePage: IProfilePageType;
  setActivePage: (v: IProfilePageType) => void;
}

const ProfilePages = ({ activePage, setActivePage }: Props) => {
  const { t } = useTranslation('dashboard');

  return (
    <section className="profile-pages flex">
      {profilePages(t).map((page) => (
        <Page key={page.id} {...page} activePage={activePage} setActivePage={setActivePage} />
      ))}
    </section>
  );
};

export default ProfilePages;

interface PageProps extends IProfilePage, Props {}

const Page = ({ activePage, type, name, setActivePage }: PageProps) => {
  return (
    <div className={`relative ${type === activePage && 'active'}`}>
      <button className="--default" onClick={() => setActivePage(type)}>
        {name}
      </button>
      <div className="activeHolder" />
    </div>
  );
};
