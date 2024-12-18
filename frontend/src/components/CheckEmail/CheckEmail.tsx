import { useTranslation } from 'react-i18next';

import { Button, H1 } from 'components';

import { SVGBack, mailImg } from 'assets';

import styles from './styles.module.scss';

interface Props {
  handleClose: () => void;
}

export const CheckEmail = ({ handleClose }: Props) => {
  const { t } = useTranslation(['auth']);

  return (
    <div className={styles.container}>
      <Button buttonType="transparent" className={styles.back} onClick={handleClose}>
        <SVGBack />
        {t('auth:signUp.checkEmail.backTo')}
      </Button>

      <div className={styles.form}>
        <img src={mailImg} className={styles.image} loading="lazy" />
        <header className={styles.header}>
          <H1>{t('auth:signUp.checkEmail.header')}</H1>
          <p>{t('auth:signUp.checkEmail.title')}</p>
        </header>

        <Button onClick={() => window.open('https://mail.google.com/mail', '_blank')}>{t('auth:signUp.checkEmail.submit')}</Button>
      </div>
    </div>
  );
};
