import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { APP_ROUTES } from 'Router';
import { H1, HR } from 'components';
import { ProvidersAuth } from 'pages/Auth';

export const LoginForm = () => {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <div className="auth-container--form flex-center flex-col">
      <form>
        <header className="text-center">
          <H1>{t('auth:signIn.header')}</H1>
          <p>{t('auth:signIn.title')}</p>
        </header>
        <section className="auth-container--form--inputs">
          <input placeholder={t('auth:email')} type="email" />
          <input placeholder={t('auth:password')} type="password" />
          <NavLink to={APP_ROUTES.RECOVERY} className="text-14">
            {t('auth:links.forgotPassword')}
          </NavLink>
        </section>
        <section className="text-center flex-col gap">
          <button>
            <p>{t('auth:signIn.submit')}</p>
          </button>
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
