import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuth } from 'features';
import { useUserAuthMutation } from 'store';
import { Button, H1 } from 'components';

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
          <p className={styles.desc}>{t('auth:signIn.title')}</p>
        </header>
        <section className={styles.inputs}>
          <input placeholder={t('auth:name')} type="name" name="name" />
          <input placeholder={t('auth:password')} type="password" name="password" />
        </section>
        <section className={styles.submit}>
          <Button type="submit" disabled={isLoading}>
            <p>{t('auth:signIn.submit')}</p>
          </Button>
        </section>
      </form>
    </div>
  );
};
