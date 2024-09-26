import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { H1 } from 'components';
import { APP_ROUTES } from 'features';

import CheckEmail from './CheckEmail';

const RecoveryForm = () => {
  const { t } = useTranslation(['auth', 'common']);

  const [isCheckOpen, setIsCheckOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCheckOpen((v) => !v);
  };

  if (isCheckOpen) return <CheckEmail handleClose={() => setIsCheckOpen((v) => !v)} />;

  return (
    <div className="auth-container--form flex-center flex-col">
      <form onSubmit={handleSubmit}>
        <header className="text-center">
          <H1>{t('auth:recovery.header')}</H1>
          <p>{t('auth:recovery.title')}</p>
        </header>
        <section className="auth-container--form--inputs">
          <input placeholder={t('auth:email')} type="email" />
        </section>
        <section className="text-center flex-col gap">
          <button>
            <p>{t('auth:recovery.submit')}</p>
          </button>
          <span>
            {t('auth:links.rememberPassword')} <NavLink to={APP_ROUTES.AUTH.LOGIN}>{t('auth:signIn.index')}</NavLink>
          </span>
        </section>
      </form>
    </div>
  );
};

export default RecoveryForm;
