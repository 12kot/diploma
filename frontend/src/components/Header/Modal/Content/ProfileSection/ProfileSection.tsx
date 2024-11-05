import { APP_ROUTES } from 'Router';
import { useHandleNavigation } from 'features';
import { ProfileCardButton } from 'components/Header/ProfileCard';

import styles from './styles.module.scss';

interface Props {
  setIsOpen: () => void;
}

export const ProfileSection = ({ setIsOpen }: Props) => {
  const { handleNavigate } = useHandleNavigation(setIsOpen);

  return <ProfileCardButton className={styles.container} onClick={() => handleNavigate(APP_ROUTES.PROFILE)} />;
};
