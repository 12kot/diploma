import { useTranslation } from 'react-i18next';

import { Button } from 'components';

import { SVGFacebook, SVGGoogle } from 'assets';

import styles from './styles.module.scss';

export const ProvidersAuth = () => {
  const { t } = useTranslation(['auth']);

  return (
    <section className={styles.container}>
      <Button buttonType={'transparent'}>
        <SVGGoogle />
        <p>{t('auth:buttons.withGoogle')}</p>
      </Button>
      <Button buttonType={'transparent'}>
        <SVGFacebook />
        <p>{t('auth:buttons.withFacebook')}</p>
      </Button>
    </section>
  );
};
