import { useState } from 'react';

import { IProfilePageType } from 'features';

import { GeneralProfilePage, ProfileHeader, ProfileOrders, ProfilePages } from './components';

export const Profile = () => {
  const [activePage, setActivePage] = useState<IProfilePageType>('general');

  return (
    <div className={`profile flex-col media-full-1200`}>
      <ProfileHeader />
      <ProfilePages activePage={activePage} setActivePage={(v) => setActivePage(v)} />
      <hr />
      {activePage === 'general' && <GeneralProfilePage />}
      {activePage === 'orders' && <ProfileOrders />}
    </div>
  );
};
