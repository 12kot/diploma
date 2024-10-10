import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { H2, Header } from 'components';

import bigTilesImg from 'assets/img/bigTiles.png';
import notFoundImg from 'assets/img/notFound.png';
import { APP_ROUTES } from 'features';

const NotFound = () => {
  const { t } = useTranslation('notFound');

  return (
    <div className="app-container --header not-found flex-col flex-center gap-big">
      <Header />
      <img src={notFoundImg} className='not-found__img' alt="404" />
      <section className="not-found__content flex-col flex-center gap-mid">
        <div className="not-found__text flex-col gap-8 text-center">
          <H2>{t('header')}</H2>
          <p>{t('text')}</p>
        </div>
        <div className="flex gap-8 w-full">
          <NavLink to={APP_ROUTES.HOME.INDEX} className="btn --transparent w-full decoration-none">{t('actions.homePage')}</NavLink>
          <NavLink to={APP_ROUTES.DASHBOARD.INDEX} className="btn w-full decoration-none">{t('actions.dashboard')}</NavLink>
        </div>
      </section>
      <img src={bigTilesImg} loading="lazy" className="bottom-0 left-0 absolute w-full z--1" />
    </div>
  );
};

export default NotFound;
