import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { Button } from 'components';
import { useContactUsModal, useHandleNavigation } from 'features';

import styles from './styles.module.scss';

interface Props {
  setIsOpen: () => void;
}

export const LoginSection = ({ setIsOpen }: Props) => {
  const { t } = useTranslation(['common']);
  const { setContactUsModalOpen } = useContactUsModal();
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  const handleOpenContactUsModal = () => {
    setIsOpen();
    setContactUsModalOpen();
  };

  return (
    <section className={styles.container}>
      <Button
        buttonType="transparent"
        className={styles.full}
        onClick={() => handleOpenContactUsModal()}>
        {t('common:buttons.contactUs')}
      </Button>
      <Button className={styles.full} onClick={() => handleNavigate(APP_ROUTES.LOGIN)}>
        {t('common:buttons.signIn')}
      </Button>
    </section>
  );
};
