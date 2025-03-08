import { useState } from 'react';

import { IProfilePageType } from 'features';

import { GeneralProfilePage, ProfileHeader, ProfileOrders, ProfilePages } from './components';

import styles from './styles.module.scss';
import { useAppSelector, useEditUserMutation } from 'store';

export const Profile = () => {
  const [editUser, { isLoading }] = useEditUserMutation();
  const { id, firstName, lastName, email, phoneNumber } = useAppSelector((state) => state.user);
  const [activePage, setActivePage] = useState<IProfilePageType>('general');

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    about: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    editUser({ id, ...formData });
  };

  return (
    <div className={styles.container}>
      <ProfileHeader onSubmit={handleSubmit} isLoading={isLoading} />
      <ProfilePages activePage={activePage} setActivePage={(v) => setActivePage(v)} />
      <hr />
      {activePage === 'general' && <GeneralProfilePage formData={formData} onChange={handleChange} />}
      {activePage === 'orders' && <ProfileOrders />}
    </div>
  );
};
