import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button, CheckEmail, H1, HR } from 'components';
import { APP_ROUTES } from 'Router';
import { ProvidersAuth } from 'pages/Auth';

import styles from '../../form.module.scss';

export const RegistrationForm = () => {
  const { t } = useTranslation(['auth', 'common']);

  const [isCheckOpen, setIsCheckOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCheckOpen((v) => !v);
  };

  if (isCheckOpen) return <CheckEmail handleClose={() => setIsCheckOpen((v) => !v)} />;

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <header className={styles.header}>
          <H1 className={styles.headerText}>{t('auth:signUp.header')}</H1>
          <p>{t('auth:signUp.title')}</p>
        </header>
        <section className={styles.inputs}>
          <input placeholder={t('auth:name')} type="text" />
          <input placeholder={t('auth:email')} type="email" />
          <input placeholder={t('auth:password')} type="password" />
        </section>
        <section className={styles.submit}>
          <Button>
            <p>{t('auth:signUp.submit')}</p>
          </Button>
          <span>
            {t('auth:links.alreadyHave')} <NavLink to={APP_ROUTES.LOGIN}>{t('auth:signIn.index')}</NavLink>
          </span>
        </section>
        <HR text={t('common:or')} />
        <ProvidersAuth />
      </form>
      <section className={styles.terms}>
        <span>
          {t('auth:signUp.tosHeader')}
          <br />
          <NavLink to="">{t('auth:links.tos')}</NavLink> & <NavLink to="">{t('auth:links.privacy')}</NavLink>
        </span>
      </section>
    </div>
  );
};
