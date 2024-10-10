import { useTranslation } from 'react-i18next';

import { getProfilePagesByUserRole, IProfilePage, IProfilePageType, useAuth } from 'features';

interface Props {
  activePage: IProfilePageType;
  setActivePage: (v: IProfilePageType) => void;
}

const ProfilePages = ({ activePage, setActivePage }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation('dashboard');

  if (!user?.role) return <></>;

  return (
    <section className="profile-pages flex">
      {getProfilePagesByUserRole(user?.role, t).map((page) => (
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
