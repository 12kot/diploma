import { useTranslation } from 'react-i18next';

import { Button, H1, Indicator } from 'components';
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
  const { t } = useTranslation('dashboard');
  const { openUserModal } = useEditUserModal();

  return (
    <section className={styles.container}>
      <div className={styles.nameContainer}>
        <img
          src="https://cdn.openart.ai/published/8EVNpLAOnr5fVQgKrqWw/Tnz4qXWD_lV1v_1024.webp"
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.name}>
          <H1>{name}</H1>
          <div className={styles.indicators}>
            <Indicator>{role}</Indicator>
            {isBanned && <Indicator type="red">{t('common.banned', { date: '23.09.2024' })}</Indicator>}
          </div>
        </div>
      </div>
      {user?.role === EUserRole.Admin && (
        <Button buttonType={['border', 'default']} className={styles.editUser} onClick={() => openUserModal()}>
          <SVGEdit />
        </Button>
      )}
    </section>
  );
};
