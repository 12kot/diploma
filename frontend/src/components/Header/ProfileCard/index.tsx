import { NavLink } from 'react-router-dom';

import { APP_ROUTES } from 'routes';

interface Props {
  className?: string;
  onClick?: () => void;
}

const ProfileCard = ({ className }: Props) => {
  return (
    <NavLink to={APP_ROUTES.DASHBOARD.PROFILE.path} className={`app-header__actions--user decoration-none ${className}`}>
      <Content />
    </NavLink>
  );
};

export const ProfileCardButton = ({ className, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`app-header__actions--user --default decoration-none ${className}`}>
      <Content />
    </button>
  );
};

const Content = () => {
  return (
    <>
      <img src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" alt="profile" loading="lazy" />
      <div className="app-header__actions--user--info">
        <p className="text-main">
          <b>Hanna Kisel</b>
        </p>

        <div className="flex items-center gap-mini">
          <div className="main-color-bg rounded w-4" />
          <p className="app-header__actions--user--info --status">Logistator</p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
