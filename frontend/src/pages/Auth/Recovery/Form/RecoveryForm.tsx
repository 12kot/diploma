import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { Button, CheckEmail, H1 } from 'components';

import styles from '../../form.module.scss';

export const RecoveryForm = () => {
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
          <H1 className={styles.headerText}>{t('auth:recovery.header')}</H1>
          <p>{t('auth:recovery.title')}</p>
        </header>
        <section className={styles.inputs}>
          <input placeholder={t('auth:email')} type="email" />
        </section>
        <section className={styles.submit}>
          <Button>
            <p>{t('auth:recovery.submit')}</p>
          </Button>
          <span>
            {t('auth:links.rememberPassword')}{' '}
            <NavLink to={APP_ROUTES.LOGIN}>{t('auth:signIn.index')}</NavLink>
          </span>
        </section>
      </form>
    </div>
  );
};
