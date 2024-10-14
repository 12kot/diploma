import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from 'features';
import { APP_ROUTES } from 'routes';
import { H2, Header } from 'components';

import bigTilesImg from 'assets/img/bigTiles.png';
import notFoundImg from 'assets/img/notFound.png';

const NotFound = () => {
  const { user } = useAuth();
  const { t } = useTranslation('notFound');

  return (
    <div className="app-container --header not-found flex-col flex-center gap-big">
      <Header />
      <img src={notFoundImg} className="not-found__img" alt="404" />
      <section className="not-found__content flex-col flex-center gap-mid">
        <div className="not-found__text flex-col gap-8 text-center">
          <H2>{t('header')}</H2>
          <p>{t('text')}</p>
        </div>
        <div className="flex gap-8 w-full">
          <NavLink to={APP_ROUTES.HOME.INDEX.path} className="btn --transparent w-full decoration-none">
            {t('actions.homePage')}
          </NavLink>
          <NavLink to={user ? APP_ROUTES.DASHBOARD.INDEX.path : APP_ROUTES.AUTH.LOGIN.path} className="btn w-full decoration-none">
            {t(user ? 'actions.dashboard' : 'actions.singIn')}
          </NavLink>
        </div>
      </section>
      <img src={bigTilesImg} loading="lazy" className="bottom-0 left-0 absolute w-full z--1" />
    </div>
  );
};

export default NotFound;
