import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { Button } from 'components';
import { useHandleNavigation } from 'features';

import styles from './styles.module.scss';

interface Props {
  setIsOpen: () => void;
}

export const LoginSection = ({ setIsOpen }: Props) => {
  const { t } = useTranslation(['common']);
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return (
    <section className={styles.container}>
      <Button className={styles.full} onClick={() => handleNavigate(APP_ROUTES.LOGIN)}>
        {t('common:buttons.signIn')}
      </Button>
    </section>
  );
};
