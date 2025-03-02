import { FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { useAuth } from 'features';
import { useUserAuthMutation } from 'store';
import { Button, H1, HR } from 'components';
import { ProvidersAuth } from 'pages/Auth';

import styles from '../../form.module.scss';

export const LoginForm = () => {
  const { login } = useAuth();
  const { t } = useTranslation(['auth', 'common']);
  const [authUser, { isLoading }] = useUserAuthMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    const result = await authUser({ name, password });
    if (result.error) return;
    login({ token: result.data, name });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <H1 className={styles.headerText}>{t('auth:signIn.header')}</H1>
          <p>{t('auth:signIn.title')}</p>
        </header>
        <section className={styles.inputs}>
          <input placeholder={t('auth:name')} type="name" name="name" />
          <input placeholder={t('auth:password')} type="password" name="password" />
          <NavLink to={APP_ROUTES.RECOVERY} className={styles.forgot}>
            {t('auth:links.forgotPassword')}
          </NavLink>
        </section>
        <section className={styles.submit}>
          <Button type="submit" disabled={isLoading}>
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
