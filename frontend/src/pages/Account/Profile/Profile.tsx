import { useState } from 'react';

import { IProfilePageType } from 'features';

import { GeneralProfilePage, ProfileHeader, ProfileOrders, ProfilePages } from './components';

import styles from "./styles.module.scss";

export const Profile = () => {
  const [activePage, setActivePage] = useState<IProfilePageType>('general');

  return (
    <div className={styles.container}>
      <ProfileHeader />
      <ProfilePages activePage={activePage} setActivePage={(v) => setActivePage(v)} />
      <hr />
      {activePage === 'general' && <GeneralProfilePage />}
      {activePage === 'orders' && <ProfileOrders />}
    </div>
  );
};
