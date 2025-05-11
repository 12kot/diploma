import { useTranslation } from 'react-i18next';

import { Button } from 'components';
import { EUserRole } from 'features';

import styles from './styles.module.scss';

interface Props {
  role: EUserRole;
  isBanned: boolean;
}

export const Actions = ({ isBanned, role }: Props) => {
  const { t } = useTranslation(['dashboard']);

  return (
    <div className={styles.container}>
      {isBanned ? (
        <Button>{t(role === EUserRole.Forwarder ? 'actions.forwarders.continue' : 'actions.drivers.continue')}</Button>
      ) : (
        <Button buttonType="red">
          {t(role === EUserRole.Forwarder ? 'actions.forwarders.suspend' : 'actions.drivers.suspend')}
        </Button>
      )}
    </div>
  );
};
