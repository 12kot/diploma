import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { Button, H1, HR } from 'components';
import { ProvidersAuth } from 'pages/Auth';

import styles from '../../form.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <header className={styles.header}>
          <H1 className={styles.headerText}>{t('auth:signIn.header')}</H1>
          <p>{t('auth:signIn.title')}</p>
        </header>
        <section className={styles.inputs}>
          <input placeholder={t('auth:email')} type="email" />
          <input placeholder={t('auth:password')} type="password" />
          <NavLink to={APP_ROUTES.RECOVERY} className={styles.forgot}>
            {t('auth:links.forgotPassword')}
          </NavLink>
        </section>
        <section className={styles.submit}>
          <Button>
            <p>{t('auth:signIn.submit')}</p>
          </Button>
          <span>
            {t('auth:links.dontHave')} <NavLink to={APP_ROUTES.REGISTRATION}>{t('auth:signUp.index')}</NavLink>
          </span>
        </section>
        <HR text={t('common:or')} />
        <ProvidersAuth />
      </form>
    </div>
  );
};
