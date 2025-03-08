import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { cx } from 'features';
import { APP_ROUTES } from 'Router';
import { BgImage, H2 } from 'components';

import bigTilesImg from 'assets/img/bigTiles.png';
import notFoundImg from 'assets/img/notFound.png';

import styles from './styles.module.scss';
import { useAppSelector } from 'store';

export const NotFound = () => {
  const user = useAppSelector(state => state.user);
  const { t } = useTranslation('notFound');

  return (
    <div className={styles.container}>
      <img src={notFoundImg} className={styles.img} alt="404" />
      <section className={styles.content}>
        <div className={styles.text}>
          <H2>{t('header')}</H2>
          <p>{t('text')}</p>
        </div>
        <div className={styles.links}>
          <NavLink to={APP_ROUTES.HOME} className={cx(styles.link, styles.transparent)}>
            {t('actions.homePage')}
          </NavLink>
          <NavLink to={user ? APP_ROUTES.DASHBOARD : APP_ROUTES.LOGIN} className={styles.link}>
            {t(user ? 'actions.dashboard' : 'actions.singIn')}
          </NavLink>
        </div>
      </section>
      <BgImage image={bigTilesImg} />
    </div>
  );
};
