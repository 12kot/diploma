import { useTranslation } from 'react-i18next';

import { H1 } from 'components';
import { EUserRole, useAuth, useEditUserModal } from 'features';

import { SVGEdit } from 'assets';

import styles from './styles.module.scss';

interface Props {
  name: string;
  isBanned: boolean;
  role: EUserRole;
}

export const UserName = ({ name, isBanned, role }: Props) => {
  const { user } = useAuth();
  const { openUserModal } = useEditUserModal();
  const { t } = useTranslation('dashboard');

  return (
    <section className={`${styles.container} flex-between gap align-center`}>
      <div className="flex gap align-center">
        <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" className="rounded" loading="lazy" />
        <div className="flex-col gap-mini">
          <H1>{name}</H1>
          <div className="flex gap-mini">
            <p className="indicator">{role}</p>
            {isBanned && <p className="indicator -red">{t('common.banned', { date: '23.09.2024' })}</p>}
          </div>
        </div>
      </div>
      {user?.role === EUserRole.Admin && (
        <button className="--default --border square rounded p-0" onClick={() => openUserModal()}>
          <SVGEdit />
        </button>
      )}
    </section>
  );
};
