import { useState } from 'react';

import { IProfilePageType } from 'features';

import { GeneralProfilePage, ProfileHeader, ProfileOrders, ProfilePages } from './components';

import styles from './styles.module.scss';
import { useAppSelector, useEditUserMutation } from 'store';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
  const { t } = useTranslation('common');
  const [editUser, { isLoading }] = useEditUserMutation();
  const { id, firstName, lastName, email, phoneNumber, about } = useAppSelector((state) => state.user);
  const [activePage, setActivePage] = useState<IProfilePageType>('general');

  const [formData, setFormData] = useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    about: about,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await editUser({ id, ...formData });
    if (res.data) toast.success(t('profileSuccess'));
    else toast.error(t('profileError'));
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
