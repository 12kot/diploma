import { IProfilePage, IProfilePageType } from 'features';

const profilePages: IProfilePage[] = [
  {
    id: 1,
    name: 'General Information',
    type: 'general',
  },
  {
    id: 3,
    name: 'My orders',
    type: 'orders',
  },
];

interface Props {
  activePage: IProfilePageType;
  setActivePage: (v: IProfilePageType) => void;
}

const ProfilePages = ({ activePage, setActivePage }: Props) => {
  return (
    <section className="profile-pages flex">
      {profilePages.map((page) => (
        <Page key={page.id} {...page} activePage={activePage} setActivePage={setActivePage} />
      ))}
    </section>
  );
};

export default ProfilePages;

interface PageProps extends IProfilePage, Props {
}

const Page = ({ activePage, type, name, setActivePage }: PageProps) => {
  return (
    <div className={`relative ${type === activePage && 'active'}`}>
      <button className="--default" onClick={() => setActivePage(type)}>{name}</button>
      <div className="activeHolder" />
    </div>
  );
};
