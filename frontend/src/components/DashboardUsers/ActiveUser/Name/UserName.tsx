import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { H1 } from 'components';
import { IUserRole, useAuth } from 'features';

import { EditUserModal } from '../../UserModal/EditUserModal';

import SVGEdit from 'assets/svg/SVGEdit';

interface Props {
  name: string;
  isBanned: boolean;
  role: IUserRole;
}

export const UserName = ({ name, isBanned, role }: Props) => {
  const { user } = useAuth();
  const { t } = useTranslation('dashboard');
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);

  return (
    <section className="flex-between gap align-center">
      <EditUserModal isOpen={isModalOpen} setIsOpen={() => setIsOpenModal((v) => !v)} />
      <div className="flex gap info align-center">
        <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" className="rounded" loading="lazy" />
        <div className="flex-col gap-mini">
          <H1>{name}</H1>
          <div className="flex gap-mini">
            <p className="indicator">{role}</p>
            {isBanned && <p className="indicator -red">{t('common.banned', { date: '23.09.2024' })}</p>}
          </div>
        </div>
      </div>
      {user?.role === 'admin' && (
        <button className="--default --border square rounded p-0" onClick={() => setIsOpenModal((v) => !v)}>
          <SVGEdit />
        </button>
      )}
    </section>
  );
};
