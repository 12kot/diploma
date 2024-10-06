import { useState } from 'react';

import { IProfilePageType } from 'features';

import ProfileHeader from './components/Header';
import ProfilePages from './components/Pages';
import GeneralProfilePage from './components/Pages/General';
import ProfileOrders from './components/Pages/Orders';

const ProfileContainer = () => {
  const [activePage, setActivePage] = useState<IProfilePageType>('general');

  return (
    <div className={`profile flex-col`}>
      <ProfileHeader />
      <ProfilePages activePage={activePage} setActivePage={(v) => setActivePage(v)} />
      <hr />
      {activePage === 'general' && <GeneralProfilePage />}
      {activePage === 'orders' && <ProfileOrders />}
    </div>
  );
};

export default ProfileContainer;
