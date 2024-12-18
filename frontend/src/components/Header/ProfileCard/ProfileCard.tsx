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
      <img
        src="https://cdn.openart.ai/published/8EVNpLAOnr5fVQgKrqWw/Tnz4qXWD_lV1v_1024.webp"
        alt="profile"
        loading="lazy"
      />
      <div className={styles.info}>
        <p>
          <b>Hanna Kisel</b>
        </p>

        <div className={styles.profile}>
          <div className={styles.status} />
          <p className={styles.post}>Logistator</p>
        </div>
      </div>
    </>
  );
};
