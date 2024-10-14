import { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProvidersAuth from 'pages/Auth/components/ProvidersAuth';

import { H1, HR } from 'components';
import { APP_ROUTES } from 'routes';

import CheckEmail from './CheckEmail';

const RegisterForm = () => {
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
          <H1>{t('auth:signUp.header')}</H1>
          <p>{t('auth:signUp.title')}</p>
        </header>
        <section className="auth-container--form--inputs">
          <input placeholder={t('auth:name')} type="text" />
          <input placeholder={t('auth:email')} type="email" />
          <input placeholder={t('auth:password')} type="password" />
        </section>
        <section className="text-center flex-col gap">
          <button>
            <p>{t('auth:signUp.submit')}</p>
          </button>
          <span>
            {t('auth:links.alreadyHave')} <NavLink to={APP_ROUTES.AUTH.LOGIN.path}>{t('auth:signIn.index')}</NavLink>
          </span>
        </section>
        <HR text={t('common:or')} />
        <ProvidersAuth />
      </form>
      <section className="text-center auth-container--terms">
        <span>
          {t('auth:signUp.tosHeader')}
          <br />
          <NavLink to="">{t('auth:links.tos')}</NavLink> & <NavLink to="">{t('auth:links.privacy')}</NavLink>
        </span>
      </section>
    </div>
  );
};

export default RegisterForm;
