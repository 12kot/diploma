import { NavLink } from 'react-router-dom';

import { cx } from 'features';
import { Button } from 'components';
import { APP_ROUTES } from 'Router';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  onClick?: () => void;
}

export const ProfileCard = ({ className }: Props) => {
  return (
    <NavLink to={APP_ROUTES.PROFILE} className={cx(styles.container, className)}>
      <Content />
    </NavLink>
  );
};

export const ProfileCardButton = ({ className, onClick }: Props) => {
  return (
    <Button onClick={onClick} className={cx(styles.container, className)} buttonType="default">
      <Content />
    </Button>
  );
};

const Content = () => {
  return (
    <>
      <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" alt="profile" loading="lazy" />
      <div className={styles.info}>
        <p className="text-main">
          <b>Hanna Kisel</b>
        </p>

        <div className={styles.profile}>
          <div className="main-color-bg rounded w-4" />
          <p className={styles.status}>Logistator</p>
        </div>
      </div>
    </>
  );
};
